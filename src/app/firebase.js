import { initializeApp } from "firebase/app";
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

const firebaseConfig = {
    apiKey: "AIzaSyAT3indf4Z0RXM6y_44qC7iIDfNgbEnlMg",
    authDomain: "volo-363502.firebaseapp.com",
    projectId: "volo-363502",
    storageBucket: "volo-363502.appspot.com",
    messagingSenderId: "535893625047",
    appId: "1:535893625047:web:0cd6362330093b91a5c892",
    measurementId: "G-C98MPNHH5C"
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
            signOutFromGoogle();
            throw new Error('Unauthorized email (must be Rice email)');
        }

    } catch (err) {
        console.log(err);
        if (typeof err == 'string') {
            alert(err);
        } else {
            alert(err.message);
        }
    }
};

// Google sign out
export const signOutFromGoogle = async () => {
    try {
        auth.signOut();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const logout = () => {
    signOut(auth);
};
  

