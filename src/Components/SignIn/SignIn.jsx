import React from "react";
import "./SignIn.css";
import FormInput from "../FormInput/FormInput";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="SignIn">
        <h2 className="signInTitle">Sign In</h2>
        <form className="signInForm" onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="text"
            value={this.state.email}
            name="email"
            required
          />
          <FormInput
            label="Password"
            type="password"
            value={this.state.password}
            name="password"
            required
          />
          <button name="Sign In" className="signInButton">
            Sign In
          </button>

          <div className="footerSignIn">
            <p
              style={{
                color: "#097bbf",

                paddingRight: "30px",
                cursor: "pointer",
              }}
            >
              Forgot your password ?
            </p>
            <Link
              to="/signup"
              className="signupLink"
              style={{
                color: "#121212",
                textAlign: "center",
                letterSpacing: "1px",
              }}
            >
              I don't have an account . Create one
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
