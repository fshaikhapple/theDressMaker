import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var fbConfig = {
  apiKey: "AIzaSyC0Jj-xLieGFAigqvScAekahEU28OAXmeE",
  authDomain: "thedressmaker-e964f.firebaseapp.com",
  databaseURL: "https://thedressmaker-e964f-default-rtdb.firebaseio.com",
  projectId: "thedressmaker-e964f",
  storageBucket: "thedressmaker-e964f.appspot.com",
  messagingSenderId: "183190745272",
  appId: "1:183190745272:web:8cfca8a5602ff23a50c44d",
  measurementId: "G-X36T9CLQD6"
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 