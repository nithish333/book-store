import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.component";
import Contact from "./Components/ContactFooter/Contact.component";
import SignIn from "./Components/SignIn/SignIn";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import SignUp from "./Components/SignUp/SignUp";
import { auth } from "./Firebase/FIrebase.util";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Contact />
      </div>
    );
  }
}
export default App;
