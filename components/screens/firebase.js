// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZiJczKqlX556QIuYMsoop04Gwbr_qsi8",
  authDomain: "sp21-d6ff4.firebaseapp.com",
  projectId: "sp21-d6ff4",
  storageBucket: "sp21-d6ff4.appspot.com",
  messagingSenderId: "80893847024",
  appId: "1:80893847024:web:bfebfb3755778693a8e935",
  measurementId: "G-VC3N2862ZJ",
  databaseURL:"https://sp21-d6ff4-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
