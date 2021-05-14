// import { authReducer } from "./authReducer";
// import { productsReducer } from "./productsReducer";
// import { cartReducer } from "./cartReducer";

// import { firebaseReducer } from 'react-redux-firebase';
// import { combineReducers } from 'redux'
// import { firestoreReducer } from 'redux-firestore'

// const rootReducer = combineReducers({
//     firestore: firestoreReducer,
//     firebase: firebaseReducer,
//     authReducer,
//     productsReducer,
//     cartReducer,

// })


// export default rootReducer;

import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux'
import {firestoreReducer } from 'redux-firestore' 
import 'firebase/firestore';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer