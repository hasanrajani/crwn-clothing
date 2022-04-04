import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjP59tbylM6Ap6Y_njXO7GTNVpnFrW6oc",
    authDomain: "crwn-clothing-90378.firebaseapp.com",
    projectId: "crwn-clothing-90378",
    storageBucket: "crwn-clothing-90378.appspot.com",
    messagingSenderId: "762618374593",
    appId: "1:762618374593:web:6ffa7e95b1b7ec931ce740",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("error create the user", error.message);
        }
    }

    return userDocRef;
};
