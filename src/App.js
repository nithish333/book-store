import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.component";
import Contact from "./Components/ContactFooter/Contact.component";
import SignIn from "./Components/SignIn/SignIn";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import SignUp from "./Components/SignUp/SignUp";
import { auth, createUserProfileDocument } from "./Firebase/FIrebase.util";
import { connect } from "react-redux";
import setCurrentUser from "./redux/user/userActions";
import Cart from "./Components/CartComponent/CartComponent";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => ({
          setCurrentUser: {
            id: snapshot.id,
            ...snapshot.data(),
          },
        }));
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.props.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Contact />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
