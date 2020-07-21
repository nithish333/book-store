import React from "react";
import "./SignIn.css";
import FormInput from "../FormInput/FormInput";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { signInWithGoogle, auth } from "../../Firebase/FIrebase.util";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log("Please check your details");
    }
  };
  handleSignInChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="SignIn">
        <h2 className="signInTitle">Sign In</h2>
        <form className="signInForm" onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="text"
            value={this.state.email}
            handleChange={this.handleSignInChange}
            name="email"
            required
          />
          <FormInput
            label="Password"
            type="password"
            value={this.state.password}
            handleChange={this.handleSignInChange}
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
          <div className="orClass">
            <p className="or">or</p>
          </div>
          <div className="googleConnect">
            <button className="googleButton" onClick={signInWithGoogle}>
              <FaGoogle className="googleIcon" />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
