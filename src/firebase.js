import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwu45UrnixbThKflfI2Bzvo_ckNsdqX6I",
  authDomain: "facebook-messenger-clone-be848.firebaseapp.com",
  projectId: "facebook-messenger-clone-be848",
  storageBucket: "facebook-messenger-clone-be848.appspot.com",
  messagingSenderId: "808168972891",
  appId: "1:808168972891:web:1d07f39b7ff523f05d957e",
  measurementId: "G-B9J3CD507Z"
});

const db = firebaseApp.firestore();
export default db; // now you can use this database any where
