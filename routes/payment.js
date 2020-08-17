// payment
const express = require("express");
const app = express();
const path = require("path");
const https = require("https");
const qs = require("querystring");
// Middleware for body parsing
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
const checksum_lib = require("../paytm/checksum");
const config = require("../paytm/config");
const Order = require("../models/Order");
const router = express.Router();
// invoice
const pdfInvoice = require("pdf-invoice");
// ------

router.post("/paynow", [parseUrl, parseJson], (req, res) => {
  console.log(req.body);
  // Route for making payment
  var paymentDetails = {
    amount: req.body.amount,
    customerId: req.body.name,
    customerEmail: req.body.email,
    customerPhone: req.body.phone,
  };
  if (
    !paymentDetails.amount ||
    !paymentDetails.customerId ||
    !paymentDetails.customerEmail ||
    !paymentDetails.customerPhone
  ) {
    res.status(400).send("Payment failed");
  } else {
    var params = {};
    params["MID"] = config.PaytmConfig.mid;
    params["WEBSITE"] = config.PaytmConfig.website;
    params["CHANNEL_ID"] = "WEB";
    params["INDUSTRY_TYPE_ID"] = "Retail";
    params["ORDER_ID"] = req.body.orderId;
    params["CUST_ID"] = paymentDetails.customerId;
    params["TXN_AMOUNT"] = paymentDetails.amount;
    params["CALLBACK_URL"] = "http://localhost:3000/callback";
    params["EMAIL"] = paymentDetails.customerEmail;
    params["MOBILE_NO"] = paymentDetails.customerPhone;

    checksum_lib.genchecksum(params, config.PaytmConfig.key, function (
      err,
      checksum
    ) {
      var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
      // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
      console.log(txn_url);

      var form_fields = "";
      for (var x in params) {
        form_fields +=
          "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
      }
      form_fields +=
        "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";
      console.log(form_fields);
      res.writeHead(200, { "Content-Type": "text/html" });
      // console.log("br");
      // console.log(
      //   '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' +
      //     txn_url +
      //     '" name="f1">' +
      //     form_fields +
      //     '</form><script type="text/javascript">document.f1.submit();</script></body></html>'
      // );
      res.write(
        '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' +
          txn_url +
          '" name="f1">' +
          form_fields +
          '</form><script type="text/javascript">document.f1.submit();</script></body></html>'
      );
      res.end();
    });
  }
});

router.post("/callback", async (req, res) => {
  var body = "";

  req.on("data", function (data) {
    body += data;
  });

  req.on("end", function () {
    var html = "";
    var post_data = qs.parse(body);

    // received params in callback
    console.log("Callback Response: ", post_data, "\n");

    // verify the checksum
    var checksumhash = post_data.CHECKSUMHASH;
    // delete post_data.CHECKSUMHASH;
    var result = checksum_lib.verifychecksum(
      post_data,
      config.PaytmConfig.key,
      checksumhash
    );
    console.log("Checksum Result => ", result, "\n");

    // Send Server-to-Server request to verify Order Status
    var params = { MID: config.PaytmConfig.mid, ORDERID: post_data.ORDERID };

    checksum_lib.genchecksum(params, config.PaytmConfig.key, function (
      err,
      checksum
    ) {
      params.CHECKSUMHASH = checksum;
      post_data = "JsonData=" + JSON.stringify(params);

      var options = {
        hostname: "securegw-stage.paytm.in", // for staging
        // hostname: 'securegw.paytm.in', // for production
        port: 443,
        path: "/merchant-status/getTxnStatus",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": post_data.length,
        },
      };

      // Set up the request
      var response = "";
      var post_req = https.request(options, function (post_res) {
        post_res.on("data", function (chunk) {
          response += chunk;
        });

        post_res.on("end", function () {
          console.log("S2S Response: ", response, "\n");

          var _result = JSON.parse(response);
          console.log(_result);
          if (_result.STATUS == "TXN_SUCCESS") {
            Order.findById(_result.ORDERID).exec((err, order) => {
              order.status = "Payment Successsful";

              const document = pdfInvoice({
                company: {
                  phone: "(99) 9 9999-9999",
                  email: "company@evilcorp.com",
                  address: "Av. Companhia, 182, Água Branca, Piauí",
                  name: "Evil Corp.",
                },
                customer: {
                  name: "Elliot Raque",
                  email: "raque@gmail.com",
                },
                items: [
                  {
                    amount: 50.0,
                    name: "XYZ",
                    description: "Lorem ipsum dollor sit amet",
                    quantity: 12,
                  },
                  {
                    amount: 12.0,
                    name: "ABC",
                    description: "Lorem ipsum dollor sit amet",
                    quantity: 12,
                  },
                  {
                    amount: 127.72,
                    name: "DFE",
                    description: "Lorem ipsum dollor sit amet",
                    quantity: 12,
                  },
                ],
              });

              // That's it! Do whatever you want now.
              // Pipe it to a file for instance:

              const fs = require("fs");

              document.generate(); // triggers rendering
              document.pdfkitDoc.pipe(fs.createWriteStream("./file.pdf"));

              order.save((err, order) => {
                if (err) {
                  res.send(
                    `payment was successfult but updation Failed Please contact customer care ${_result}`
                  );
                }
                res.send(`payment was successful  ${_result}`);
              });
            });
          } else {
            Order.findById(_result.ORDERID).exec((err, order) => {
              order.status = "Payment Failed";
              order.save((err, order) => {
                if (err) {
                  res.send(
                    `payment Failed Please contact customer care ${_result}`
                  );
                }
                res.send(
                  `payment Failed Please contact customer care if you were charged${_result}`
                );
              });
            });
          }
        });
      });

      // post the data

      post_req.write(post_data);
      post_req.end();
    });
  });
});

module.exports = router;
