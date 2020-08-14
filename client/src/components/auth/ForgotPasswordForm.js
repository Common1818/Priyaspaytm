import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { sendResetEmail } from "../../actions/auth";
import "./css/ForgotPassswordForm.css";

const ForgotPasswordForm = ({ sendResetEmail, isAuthenticated }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    sendResetEmail({ email });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="productForm-container">
      <div class="container-center">
        <center>
          <img
            src="https://www.svgrepo.com/show/303611/giant-bicycles-logo.svg"
            width="30%"
          ></img>
        </center>
        <h2>Don't Worry!</h2>
        <form onSubmit={handleSubmit}>
          <h4>Just provide your email we'll send you a password Reset Link </h4>
          <formgroup>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
            />
            <label for="email">Email</label>
            <span>enter your email</span>
          </formgroup>
          <button id="login-btn">Submit</button>
        </form>
        <p>
          Remember your password? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { sendResetEmail })(ForgotPasswordForm);
