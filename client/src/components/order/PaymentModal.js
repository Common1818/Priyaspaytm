import React from "react";
import { Modal, Button } from "react-bootstrap";

const PaymentModal = (props) => {
  const {
    order,
    order: { _id, total, user, billingDetails },
  } = props;
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div class="row my-5">
            <div class="col-md-4 offset-md-4">
              <div class="card">
                <div class="card-body">
                  <form class="" action="/paynow" method="post">
                    <div class="form-group">
                      <label for="">CustomerId </label>
                      <input
                        class="form-control"
                        value={user}
                        type="text"
                        name="name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">orderId </label>
                      <input
                        class="form-control"
                        value={_id}
                        type="text"
                        name="orderId"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Email: </label>
                      <input
                        value={billingDetails && billingDetails.email}
                        class="form-control"
                        type="text"
                        name="email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Phone: </label>
                      <input
                        class="form-control"
                        value={billingDetails && billingDetails.mobileNumber}
                        type="text"
                        name="phone"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Amount: </label>
                      <input
                        value={total}
                        class="form-control"
                        type="text"
                        name="amount"
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        className="btn form-control btn-primary pay-with-paytm"
                      >
                        Pay Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PaymentModal;
