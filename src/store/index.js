// import { createStore } from 'redux'
// import { reactReduxFirebase } from 'react-redux-firebase'
// // import { reduxFirestore } from 'redux-firestore' // <- needed if using firestore
// import reducer from './reducer'

// const initialState = {}

// const fbConfig = {} // object containing Firebase config
// const rrfConfig = { userProfile: 'users' } // react-redux-firebase config

// // Initialize firebase instance
// firebase.initializeApp(fbConfig)

// export default () => {
//   return createStore(
//     rootReducer,
//     initialState,
//     compose(
//       reactReduxFirebase(firebase, rrfConfig), // pass in firebase instance instead of config
//       // reduxFirestore(firebase) // <- needed if using firestore
//       //  applyMiddleware(...middleware) // to add other middleware
//     )
//   )
// }