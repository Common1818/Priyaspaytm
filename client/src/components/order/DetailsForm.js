import React, { useState } from "react";
import { check } from "express-validator";

const DetailsForm = ({
  details,
  handleBilling,
  details: { firstName, lastName, email, mobileNumber, address, city, pincode },
  setDetails,
  billingDetails,
}) => {
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  console.log(billingDetails);
  const [checked, setChecked] = useState(false);

  return (
    <div className="col-sm-4">
      <h4 class="my-4">Billing Address</h4>
      <form>
        <div class="form-row">
          <div class="col-md-6 form-group">
            <label for="firstName">First Name</label>
            <input
              placeholder={
                billingDetails ? billingDetails.firstName : "firstName"
              }
              required="true"
              type="text"
              class="form-control"
              id="firstName"
              value={firstName}
              onChange={handleChange}
            ></input>
            <div class="invalid-feedback">Valid first name is required.</div>
          </div>

          <div class="col-md-6 form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder={
                billingDetails ? billingDetails.lastName : "lastName"
              }
              value={lastName}
              onChange={handleChange}
            ></input>
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">@</span>
            </div>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder={billingDetails ? billingDetails.email : "email"}
              value={email}
              onChange={handleChange}
              required
            ></input>
            <div class="invalid-feedback">Your username is required.</div>
          </div>
          <label for="mobileNumber">Mobile Number</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">+91</span>
            </div>
            <input
              type="number"
              class="form-control"
              id="mobileNumber"
              placeholder={
                billingDetails ? billingDetails.mobileNumber : "mobileNumber"
              }
              value={mobileNumber}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              required
            ></input>
            <div class="invalid-feedback">Your Mobile Number is required.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <textarea
            type="text"
            class="form-control"
            id="address"
            value={address}
            onChange={handleChange}
            placeholder={billingDetails ? billingDetails.address : "address"}
            required
          ></textarea>
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group">
            <label for="city">City</label>
            <input
              type="text"
              class="form-control"
              id="city"
              placeholder={billingDetails ? billingDetails.city : "city"}
              value={city}
              onChange={handleChange}
              required
            ></input>
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>

          <div class="col-md-4 form-group">
            <label for="pincode">Postcode</label>
            <input
              type="text"
              class="form-control"
              id="pincode"
              placeholder={billingDetails ? billingDetails.pincode : "pincode"}
              value={pincode}
              onChange={handleChange}
              required
            ></input>
            <div class="invalid-feedback">Postcode required.</div>
          </div>
          <div class="form-check billingbutton">
            <button className="btn-primary" onClick={handleBilling}>
              Use This Address
            </button>
          </div>

          <hr></hr>
        </div>
      </form>
    </div>
  );
};

export default DetailsForm;
