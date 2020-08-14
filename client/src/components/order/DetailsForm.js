import React from "react";

const DetailsForm = () => {
  return (
    <div className="col-sm-4">
      <h4 class="my-4">Billing Address</h4>
      <form>
        <div class="form-row">
          <div class="col-md-6 form-group">
            <label for="firstname">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              placeholder="First Name"
            ></input>
            <div class="invalid-feedback">Valid first name is required.</div>
          </div>

          <div class="col-md-6 form-group">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Last Name"
            ></input>
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>
        </div>
        <div class="form-group">
          <label for="username">Email</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">@</span>
            </div>
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="test@example.com"
              required
            ></input>
            <div class="invalid-feedback">Your username is required.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="adress">Address</label>
          <textarea
            type="text"
            class="form-control"
            id="adress"
            placeholder="1234 Main Street"
            required
          ></textarea>
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group">
            <label for="country">Country</label>
            <select type="text" class="form-control" id="country">
              <option value>Choose...</option>
              <option>India</option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>

          <div class="col-md-4 form-group">
            <label for="city">City</label>
            <input
              type="text"
              class="form-control"
              id="adress"
              placeholder="Your City Name"
              required
            ></input>
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>

          <div class="col-md-4 form-group">
            <label for="postcode">Postcode</label>
            <input
              type="text"
              class="form-control"
              id="adress"
              placeholder="Pincode Here"
              required
            ></input>
            <div class="invalid-feedback">Postcode required.</div>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="shipping-adress"
            ></input>
            Shipping address is the same as my billing address
            <label for="shipping-adress" class="form-check-label"></label>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="same-adress"
            ></input>
            Save this information for next time
            <label for="same-adress" class="form-check-label"></label>
          </div>

          <hr></hr>
        </div>
      </form>
    </div>
  );
};

export default DetailsForm;
