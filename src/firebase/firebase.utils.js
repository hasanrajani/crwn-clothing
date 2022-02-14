import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyDjP59tbylM6Ap6Y_njXO7GTNVpnFrW6oc",
    authDomain: "crwn-clothing-90378.firebaseapp.com",
    projectId: "crwn-clothing-90378",
    storageBucket: "crwn-clothing-90378.appspot.com",
    messagingSenderId: "762618374593",
    appId: "1:762618374593:web:6ffa7e95b1b7ec931ce740",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
