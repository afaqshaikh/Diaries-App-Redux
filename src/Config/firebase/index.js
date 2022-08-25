import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APIID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;