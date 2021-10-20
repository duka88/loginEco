import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyD3QaE0w4JtcFqcX31h85KZol9B6yBbMQ8",
  // authDomain: "logineko-9cd74.firebaseapp.com",
  // databaseURL: "https://logineko-9cd74-default-rtdb.firebaseio.com",
  // projectId: "logineko-9cd74",
  // storageBucket: "logineko-9cd74.appspot.com",
  // messagingSenderId: "221677909745",
  // appId: "1:221677909745:web:8d60236ef5399a91bb1b50",
  apiKey: "AIzaSyDOmvB2_MC-GcaemQHv7mIZmnAVofM1GA0",
  authDomain: "login-eco.firebaseapp.com",
  projectId: "login-eco",
  storageBucket: "login-eco.appspot.com",
  messagingSenderId: "660793688221",
  appId: "1:660793688221:web:c7314351e56465c0085474",
  measurementId: "G-KZ4P6QELWE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
