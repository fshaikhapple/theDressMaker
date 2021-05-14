// import React from 'react';
// import ReactDOM from 'react-dom';
// import { applyMiddleware, compose, createStore } from 'redux';
// import './index.css';
// import rootReducer from './redux/reducer';
// import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
// import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import thunk from 'redux-thunk';
// import firebase from './config/fbConfig';
// import { Provider } from 'react-redux';
// import App from './App';

// const store = createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     // reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
//     reduxFirestore(firebase) // redux bindings for firestore
//   )
// );
// const rrfConfig = {}

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ReactReduxFirebaseProvider {...rrfProps}>
//         <App/>
//       </ReactReduxFirebaseProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import thunk from 'redux-thunk'

import fbConfig from './config/fbConfig';
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
} from "@react-firebase/database";
import 'firebase/database';
import { FirestoreDocument } from '@react-firebase/firestore';
import firebase from './config/fbConfig';
import rootReducer from './redux/reducer';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    // reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

const rrfConfig = {}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

