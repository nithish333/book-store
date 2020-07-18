import React from "react";
import "./SignUp.css";
import FormInput from "../FormInput/FormInput";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      consfirmPassword: "",
    };
  }
  render() {
    return (
      <div className="SignUp">
        <h2 className="signUpTitle">Create a new account</h2>
        <form className="signUpForm">
          <FormInput
            label="Display Name"
            value={this.state.displayName}
            type="text"
            name="displayname"
            required
          />
          <FormInput
            label="Email"
            value={this.state.email}
            type="text"
            name="email"
            required
          />
          <FormInput
            label="Password"
            value={this.state.password}
            type="password"
            name="password"
            required
          />
          <FormInput
            label="Confirm password"
            value={this.state.consfirmPassword}
            type="password"
            name="confirmpassword"
            required
          />
          <button className="signUpButton">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
