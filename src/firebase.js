// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyBNdDzHa6Bgvvm3fSnDxGs4sgMJJtai-ug",
  authDomain: "postboard-cf4a9.firebaseapp.com",
  projectId: "postboard-cf4a9",
  storageBucket: "postboard-cf4a9.appspot.com",
  messagingSenderId: "816917965675",
  appId: "1:816917965675:web:a5f4aea4cbee638880fa2e"
});

export const auth = app.auth();
export const db = getFirestore(app);
export default app;
