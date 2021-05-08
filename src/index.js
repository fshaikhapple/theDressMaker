import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
import Header from './Components/Header';
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
import { reduxFirestore, createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from 'firebase/app';
import Contact from './Components/Contact';
import Orders from './Components/adminPages/Orders';
import Inventory from './Components/adminPages/Inventory';
import Cart from './Components/Cart';
import VerifyPhoneNumber from './Components/VerifyPhoneNumber';
import OtpVerification from './Components/OtpVerification';
import UserDetailsForm from './Components/UserDetailsForm';
import PrivateRoute from './PrivateRoute';
import AboutUs from './Components/AboutUs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rfConfig = {}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    reduxFirestore(firebase, rfConfig),
    applyMiddleware(
      sagaMiddleware
    ),
    persistState(/*paths, config*/)
  )
)
const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch
  }
  return (action) => {
    console.group("%c action->", 'color:green', action)
    console.log("%c pev state",  'color:gray',store.getState())
    const returnValue = rawDispatch(action)
    console.log("%c next state",'color:teal', store.getState())
    console.groupEnd("action type", action.type)
    return returnValue
  }
}
// store.subscribe(() => {
//   console.log("updated store", store.getState())
// })
if (process.env.NODE_ENV !== 'production') {
  store.dispatch = addLoggingToDispatch(store)
}
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
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/collection" component={Collection} />
            <Route exact path="/dashboard" component={Login} />
            <Route exact path='/singleProduct/:id' component={SingleProduct} />
            <Route exact path='/login' component={Login} />
            {/* <PrivateRoute exact path='/adminPanel' component={AdminPanel} /> */}
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/aboutUs' component={AboutUs} />
            <PrivateRoute exact path='/inventory' component={Inventory} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/verifyPhoneNumber' component={VerifyPhoneNumber} />
            <Route exact path='/otpVerification' component={OtpVerification} />
            <Route exact path='/userDetailsForm' component={UserDetailsForm} />
          </Switch>
          <Footer />
        </ReactReduxFirebaseProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


