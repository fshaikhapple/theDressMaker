import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 var firebaseConfig = {
  apiKey: "AIzaSyC0Jj-xLieGFAigqvScAekahEU28OAXmeE",
  authDomain: "thedressmaker-e964f.firebaseapp.com",
  databaseURL: "https://thedressmaker-e964f-default-rtdb.firebaseio.com",
  projectId: "thedressmaker-e964f",
  storageBucket: "thedressmaker-e964f.appspot.com",
  messagingSenderId: "183190745272",
  appId: "1:183190745272:web:8cfca8a5602ff23a50c44d",
  measurementId: "G-X36T9CLQD6"
};

const rfConfig = {}; // optional redux-firestore Config Options

// Initialize firebase instance
// firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
// firebase.firestore();
// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// }
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots:true })
 
export default firebase; 