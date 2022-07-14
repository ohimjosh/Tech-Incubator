// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyDSAogfaha_I1rqENvdDS8VgGYctU87r1I",
  authDomain: "login-22c52.firebaseapp.com",
  projectId: "login-22c52",
  storageBucket: "login-22c52.appspot.com",
  messagingSenderId: "826234056573",
  appId: "1:826234056573:web:07767c0b1549d1b9ffe614",
});

export const auth = app.auth();
export default app;
