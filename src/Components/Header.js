import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2 scrolled awake" id="ftco-navbar">
      <div className="container">
        <Link className="navbar-brand" href="/"><NavLink to="/">TDM</NavLink></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
          aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span>{"Menu"}</button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link href="index.html" className="nav-link"><NavLink to="/">Home</NavLink></Link></li>
            <li className="nav-item dropdown">

              <Link className="nav-link " to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><NavLink to="/collection"> Shop</NavLink></Link>
              {/* <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="shop.html">Shop</a>
              <a className="dropdown-item" href="product-single.html">Single Product</a>
              <a className="dropdown-item" href="cart.html">Cart</a>
              <a className="dropdown-item" href="checkout.html">Checkout</a>
            </div> */}
            </li>
            {/* <li className="nav-item"><a className="nav-link"><NavLink to='/singleProduct'>Product Review </NavLink></a></li> */}
            <li className="nav-item"><Link to="blog.html" className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to="contact" className="nav-link">Contact</Link></li>
            <li className="nav-item"><Link to="cart" className="nav-link"><span
              className="icon-shopping_cart"></span>[0]</Link></li>
            <li className="nav-item cta cta-colored">
              <Link to="login" className="nav-link"><span
                className="icon-shopping_cart"></span>Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}