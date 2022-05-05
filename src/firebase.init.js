// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa_Dh4FI0Advz-Qn2HN4F2L3CzgxHuKPs",
    authDomain: "macology-afc12.firebaseapp.com",
    projectId: "macology-afc12",
    storageBucket: "macology-afc12.appspot.com",
    messagingSenderId: "1008109617306",
    appId: "1:1008109617306:web:48edf7b6f38886ddcbdf23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;