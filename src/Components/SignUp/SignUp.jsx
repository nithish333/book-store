import React from "react";
import "./SignUp.css";
import FormInput from "../FormInput/FormInput";
// import { auth, createUserProfileDocument } from "../../Firebase/Firebase.util";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (event) => {};
  render() {
    return (
      <div className="SignUp">
        <h2 className="signUpTitle">Create a new account</h2>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            value={this.state.displayName}
            type="text"
            name="displayname"
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            value={this.state.email}
            type="text"
            name="email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            value={this.state.password}
            type="password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm password"
            value={this.state.confirmPassword}
            type="password"
            name="confirmpassword"
            onChange={this.handleChange}
            required
          />
          <button className="signUpButton">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
