import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirebaseProvider from './Components/FirebaseProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Footer } from './Components/Footer';
import { Testimony } from './Components/Testimony';
import { Home } from './Components/Home';
import { Collection } from './Components/Collection';
import { Header } from './Components/Header';
import { SingleProduct } from './Components/SingleProduct';
import Login from './Components/adminPages/Login';
import { AdminPanel } from './Components/adminPages/AdminPanel';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import { useSelector } from 'react-redux'
import persistState from 'redux-localstorage'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga/rootsaga';
import { reduxFirestore, getFirestore,createFirestoreInstance } from 'redux-firestore'
import { reactReduxFirebase, getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { firebaseConfig } from "./firebase";
import firebase from 'firebase/app';
import Contact  from './Components/Contact';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rfConfig = {
  useFirestoreForProfile: true
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    reduxFirestore(firebase, rfConfig),
    applyMiddleware(
      sagaMiddleware
    ),
    // reduxFirestore(firebaseConfig),
    // reactReduxFirebase(firebaseConfig),
    persistState(/*paths, config*/)
  )
)
store.subscribe(() => {
  console.log("updated store", store.getState())
})
sagaMiddleware.run(rootSaga);

const rrfProps = {
  firebase,
  config: {
    apiKey: "AIzaSyC0Jj-xLieGFAigqvScAekahEU28OAXmeE",
    authDomain: "thedressmaker-e964f.firebaseapp.com",
    databaseURL: "https://thedressmaker-e964f-default-rtdb.firebaseio.com",
    projectId: "thedressmaker-e964f",
    storageBucket: "thedressmaker-e964f.appspot.com",
    messagingSenderId: "183190745272",
    appId: "1:183190745272:web:8cfca8a5602ff23a50c44d",
    measurementId: "G-X36T9CLQD6"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <FirebaseProvider>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/collection" component={Collection} />
            <Route exact path="/dashboard" component={Login} />
            <Route exact path='/singleProduct/:id' component={SingleProduct} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/adminPanel' component={AdminPanel} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </ReactReduxFirebaseProvider>
        </FirebaseProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


