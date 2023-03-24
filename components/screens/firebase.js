// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// For Auth
import { initializeAuth } from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDDFo4wBsEqncgvUCYMuueXKEW13OxFipI",
  authDomain: "bcssp21g3.firebaseapp.com",
  databaseURL: "https://bcssp21g3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bcssp21g3",
  storageBucket: "bcssp21g3.appspot.com",
  messagingSenderId: "583558849663",
  appId: "1:583558849663:web:7d237590de9a76826bcb4a",
  measurementId: "G-1ZC525BTQ2",
};

// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

const app = initializeApp(firebaseConfig);
// const auth = initializeAuth();
const auth = initializeAuth(app);

// const analytics = getAnalytics(app);
export default {app, auth};