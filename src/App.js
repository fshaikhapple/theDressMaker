// import React, { useState, useEffect } from 'react';
// // import './css/css-open-iconic-bootstrap.min.css';
// import './css/css-animate.css';
// // import './css/css-owl.carousel.min.css';
// import './css/css-owl.theme.default.min.css';
// import './css/css-magnific-popup.css';
// import './css/css-aos.css';
// import './css/css-ionicons.min.css';
// import './css/css-bootstrap-datepicker.css';
// import './css/css-jquery.timepicker.css';
// // import './css/css-flaticon.css';
// import './css/css-icomoon.css';
// import './css/css-style.css';
// // import { LetsStart } from './Components/LetsStart';
// import { Footer } from './Components/Footer';
// import { Home } from './Components/Home';
// import { Collection } from './Components/Collection';
// import Header from './Components/Header';
// import { SingleProduct } from './Components/SingleProduct';
// import Login from './Components/adminPages/Login';
// import { Provider } from "react-redux";
// import firebase from 'firebase/app';
// import Contact from './Components/Contact';
// import Orders from './Components/adminPages/Orders';
// import Inventory from './Components/adminPages/Inventory';
// import Cart from './Components/Cart';
// import VerifyPhoneNumber from './Components/VerifyPhoneNumber';
// import OtpVerification from './Components/OtpVerification';
// import UserDetailsForm from './Components/UserDetailsForm';
// import PrivateRoute from './PrivateRoute';
// import AboutUs from './Components/AboutUs';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   return (
// <Router>
//   <Header />
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route exact path="/collection" component={Collection} />
//     <Route exact path="/dashboard" component={Login} />
//     <Route exact path='/singleProduct/:id' component={SingleProduct} />
//     <Route exact path='/login' component={Login} />
//     <Route exact path='/contact' component={Contact} />
//     <Route exact path='/orders' component={Orders} />
//     <Route exact path='/aboutUs' component={AboutUs} />
//     <PrivateRoute exact path='/inventory' component={Inventory} />
//     <Route exact path='/cart' component={Cart} />
//     <Route exact path='/verifyPhoneNumber' component={VerifyPhoneNumber} />
//     <Route exact path='/otpVerification' component={OtpVerification} />
//     <Route exact path='/userDetailsForm' component={UserDetailsForm} />
//   </Switch>
//   <Footer />
// </Router>
//   );
// }
// export default App;

import React, { Component } from 'react';
import './css/css-animate.css';
// import './css/css-owl.carousel.min.css';
import './css/css-owl.theme.default.min.css';
import './css/css-magnific-popup.css';
import './css/css-aos.css';
import './css/css-ionicons.min.css';
import './css/css-bootstrap-datepicker.css';
import './css/css-jquery.timepicker.css';
// import './css/css-flaticon.css';
import './css/css-icomoon.css';
import './css/css-style.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import "firebase/database";
// import { LetsStart } from './Components/LetsStart';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Collection } from './Components/Collection';
import Header from './Components/Header';
import { SingleProduct } from './Components/SingleProduct';
import Login from './Components/adminPages/Login';
import { Provider } from "react-redux";
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
import { Route, Router, Switch,BrowserRouter } from 'react-router-dom';
import OrderPlaced from './Components/OrderPlaced';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/dashboard" component={Login} />
          <Route exact path='/singleProduct/:id' component={SingleProduct} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/aboutUs' component={AboutUs} />
          <PrivateRoute exact path='/inventory' component={Inventory} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/verifyPhoneNumber' component={VerifyPhoneNumber} />
          <Route exact path='/otpVerification' component={OtpVerification} />
          <Route exact path='/userDetailsForm' component={UserDetailsForm} />
          <Route exact path='/orderPlaced' component={OrderPlaced} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tdmPosts' },
    { collection: 'notifications' },
    { collection: 'tdmOrders' },
  ])
)(App)