import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCPQ9gfoKSXQ9y0LM93LUi4zTjOGIShtTc",
  authDomain: "book-store-3456b.firebaseapp.com",
  databaseURL: "https://book-store-3456b.firebaseio.com",
  projectId: "book-store-3456b",
  storageBucket: "book-store-3456b.appspot.com",
  messagingSenderId: "336567129597",
  appId: "1:336567129597:web:e8d20ec593bfae42aff594",
  measurementId: "G-Z2LQ958428",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("Error creating user " + err);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
