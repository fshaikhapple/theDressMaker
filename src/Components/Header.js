import React, { memo } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
//  import { useDispatch } from 'react-redux'
const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authReducer.adminLoggedIn)

  // const data = useSelector(state => state)
  // console.log("data",data);
  const products = useSelector(state => state?.cartReducer?.products)
  const logout = () => {
    dispatch({ type: 'LOGIN_FAILED' })
    props.history.push('/')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2 scrolled awake" id="ftco-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">TDM</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
          aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span>{"Menu"}</button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <span to="index.html" className="nav-link"><NavLink to="/collection">Home</NavLink></span></li>
            <li className="nav-item dropdown">

              <span className="nav-link " to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><NavLink to="/collection"> Shop</NavLink></span>
              {/* <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="shop.html">Shop</a>
              <a className="dropdown-item" href="product-single.html">Single Product</a>
              <a className="dropdown-item" href="cart.html">Cart</a>
              <a className="dropdown-item" href="checkout.html">Checkout</a>
            </div> */}
            </li>
            {/* <li className="nav-item"><a className="nav-link"><NavLink to='/singleProduct'>Product Review </NavLink></a></li> */}
            <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            <li className="nav-item"><Link to="/aboutUs" className="nav-link">About us</Link></li>
            {isLoggedIn && <Link to="/inventory" className="nav-link">
              <span className="">
              </span>Admin Panel</Link>}
            <li className="nav-item ">
              <Link to="/cart" className=" nav-link">
                <span className="icon-shopping_cart">{!!products.length && products.length}</span>
                {products.length && <span className='notify'></span>}
              </Link>
            </li>
            <li className="nav-item cta cta-colored">
              {!isLoggedIn && <Link to="login" className="nav-link"><span
                className="icon-shopping_cart"></span>Login</Link>}
              {isLoggedIn && <Link to="/" onClick={() => logout()} className="nav-link"><span
                className="icon-shopping_cart"></span>Logout</Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(memo(Header))