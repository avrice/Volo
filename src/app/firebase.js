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
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        if (!user.email.includes('@rice.edu')) {
            signOutFromGoogle();
            throw 'Not Rice email';
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

const signOutFromGoogle = () => {
    try {
        auth.signOut();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
  };
  export {
    auth,
    db,
    signOutFromGoogle,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };
  

