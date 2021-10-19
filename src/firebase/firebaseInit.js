import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3QaE0w4JtcFqcX31h85KZol9B6yBbMQ8",
  authDomain: "logineko-9cd74.firebaseapp.com",
  databaseURL: "https://logineko-9cd74-default-rtdb.firebaseio.com",
  projectId: "logineko-9cd74",
  storageBucket: "logineko-9cd74.appspot.com",
  messagingSenderId: "221677909745",
  appId: "1:221677909745:web:8d60236ef5399a91bb1b50",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
