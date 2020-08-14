import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Link } from "react-router-dom";
import "./css/LoginForm.css";
import { Redirect } from "react-router-dom";

const LoginFormComp = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    login(formData);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="form form--login" onSubmit={handleSubmit}>
      <h1 className="form__title">Sign in for BicycleDrift</h1>
      <div className="form__helper">
        <input
          type="text"
          value={email}
          onChange={handleChange}
          id="email"
          placeholder="Email"
          className="form__input"
        />
        <label className="form__label" htmlFor="email">
          Email
        </label>
      </div>
      <div className="form__helper">
        <input
          type="password"
          value={password}
          onChange={handleChange}
          id="password"
          placeholder="Password"
          className="htmlForm__input"
        />
        <label className="htmlForm__label" htmlFor="password">
          Password
        </label>
      </div>
      <button type="submit" className="htmlForm__button">
        Login
      </button>
      {"/"}
      <Link to="/forgotpassword" className="forgotPassword">
        Forgot Password
      </Link>
      <p className="form__text">Don't have an account?</p>
      <label htmlFor="toggle" className="form__link">
        Sign up!
      </label>
      <br />
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginFormComp);
