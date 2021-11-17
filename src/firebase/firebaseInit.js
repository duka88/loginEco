import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
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
