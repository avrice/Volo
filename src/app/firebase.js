import { initializeApp } from "firebase/app";
import store from '../app/store'
import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import {displaySnackbar} from "../features/snackbar/snackSlice";

const firebaseConfig = {
    apiKey: "AIzaSyCTTn5gWVYhav_Z4fTtxoWj2EtHL18YhQo",
    authDomain: "volo-6b417.firebaseapp.com",
    projectId: "volo-6b417",
    storageBucket: "volo-6b417.appspot.com",
    messagingSenderId: "884514902708",
    appId: "1:884514902708:web:00dc1024011d18f9957de1",
    measurementId: "G-JZWSR4EPDD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

// Disables automatic account selection
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// Google email authentication
export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;

        // Yeets user if email domain not rice.edu
        if (!user.email.includes('@rice.edu')) {
            await signOutFromGoogle();
            throw new Error('Unauthorized email (must be Rice email)');
        }

    } catch (err) {
        console.log(err);
        if (typeof err == 'string') {
            store.dispatch(displaySnackbar(err));
        } else {
            store.dispatch(displaySnackbar(err.message));
        }
    }
};

// Google sign out
export const signOutFromGoogle = async () => {
    try {
        auth.signOut();
    } catch (err) {
        console.error(err);
        store.dispatch(displaySnackbar(err.message));
    }
}

export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        store.dispatch(displaySnackbar(err.message));
    }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        store.dispatch(displaySnackbar(err.message));
    }
};

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        store.dispatch(displaySnackbar("Password reset link sent!"));
    } catch (err) {
        console.error(err);
        store.dispatch(displaySnackbar(err.message));
    }
};

export const logout = () => {
    signOut(auth);
};
  

