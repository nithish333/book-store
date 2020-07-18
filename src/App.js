import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.component";
import Contact from "./Components/ContactFooter/Contact.component";
import SignIn from "./Components/SignIn/SignIn";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import SignUp from "./Components/SignUp/SignUp";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Contact />
    </div>
  );
};
export default App;
