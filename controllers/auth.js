const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
var gmailEmail = "marketingacad.help@gmail.com";
var gmailPassword = "abcd9876";
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.signup = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { firstname, lastname, email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        errors: [{ msg: "User already exists" }],
      });
    }

    user = new User(req.body);

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Return jwt
    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 36000000000 },
      (err, token) => {
        if (err) throw err;
        return res.json({ token, userId: user._id });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.signin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        return res.json({ token, userId: user._id });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.sendResetEmail = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;

  //   checking if user exists
  let user = await User.findOne({ email }).select("-password");

  if (!user) {
    return res.status(400).json({
      errors: [
        {
          msg: `Can not send Email`,
        },
      ],
    });
  }

  //   generating unique ressest id
  const resetId = await crypto.randomBytes(15).toString("hex");

  //   Reset URl
  const resetUrl = `http://localhost:3000/forgotpassword/${resetId}`;

  //   Updating user's resetId in the database
  user.resetId = resetId;
  await user.save();
  //   Generating the email
  const mailOptions = {
    from: '"Bicycle Drift" <noreply@firebase.com>',
    to: email,
  };

  mailOptions.subject = `Password Reset request for your bicycleDrift account`;
  mailOptions.text = `Hey, ${user.firstname} We Just recieved a password reset request from you . Click here to reset your password: ${resetUrl}`;

  try {
    await mailTransport.sendMail(mailOptions);
    return res.json({
      messages: [
        {
          msg: `An email containing password reset link has been sent to your email addres`,
        },
      ],
    });
  } catch (error) {
    //   resetting ussesrId to emoty string in database

    user.resetId = "";
    await user.save();
    return res.status(400).json({
      errors: [
        {
          msg: `Can not set Email`,
        },
      ],
    });
  }
};

exports.resetPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // fetch reestId from params
  const { resetId } = req.params;
  const { password } = req.body;
  //   find useer with this resetId
  let user = await User.findOne({ resetId }).select("-password");
  if (!user) {
    return res.status(400).json({ message: "Error Updating password" });
  }
  //   Updating password and setting resetId /back to empty string
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  user.resetId = "";
  try {
    await user.save();
  } catch (err) {
    return res.status(400).json({ message: "Error Updating password" });
  }
  return res.json({
    user,
    message: "your password was changed successfully !! YAY",
  });
};
