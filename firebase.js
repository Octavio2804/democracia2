// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJyZbuWxXou9Aojh9N5l0-ng83fqsvk3k",
  authDomain: "democracia-a45f6.firebaseapp.com",
  projectId: "democracia-a45f6",
  storageBucket: "democracia-a45f6.appspot.com",
  messagingSenderId: "107206939490",
  appId: "1:107206939490:web:5f66ba2fc89866115a523b",
  measurementId: "G-TBJ6HL2TTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = app.firestore();

export default app.firestore();
