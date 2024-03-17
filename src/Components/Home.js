import React, { Component } from 'react'
import "../Styles/Home.css";

export default class main extends Component {
  render() {
    return (
      <>

<header>
      <nav class="navbar">
        <div class="nav-logo">
          <a href="#"><img src="http://logo-logos.com/2016/12/Amazon_logo.png" alt="Amazon logo, logotypeSource: https://logo-logos.com/"/></a>
        </div>
        <div class="address">
          <a href="#" class="deliver">Deliver</a>
          <div class="map-icon">
            <span class="material-symbols-outlined">location_on</span>
            <a href="#" class="location">Nepal</a>
          </div>
        </div>
        <div class="nav-search">
          <select class="select-search">
            <option>All</option>
            <option>All Categories</option>
            <option>Amazon Devices</option>
          </select>
          <input type="text" placeholder="Search Amazon" class="search-input"/>
          <div class="search-icon">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>
        <div class="sign-in">
         <a href="#"> <p>Hello, sign in</p>
          <span>Account &amp; Lists</span></a>
        </div>
        <div class="returns">
          <a href="#"><p>Returns</p>
            <span>&amp; Orders</span></a>
        </div>
        <div class="cart">
          <a href="#">
            <span class="material-symbols-outlined cart-icon">shopping_cart</span>
            </a>
            <p>Cart</p>
        </div>
      </nav>
      
      <div class="banner">
        <div class="banner-content">
          <div class="panel">
            <span class="material-symbols-outlined">menu</span>
            <a href="#">All</a>
          </div>
  
          <ul class="links">
            <li><a href="#">Today's Deals</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Registry</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Sell</a></li>
          </ul>
          <div class="deals">
            <a href="#">Shop deals in Electronics</a>
          </div>
        </div>
      </div>
    </header>
    <section class="hero-section"></section>
    <section class="shop-section">
      <div class="shop-images">
        <div class="shop-link">
          <h3>Shop Laptops &amp; Tables</h3>
          <img src="images/img-1.png" alt="card"/>
          <a href="#">Shop now</a>
        </div>
        <div class="shop-link">
          <h3>Shop Smartwatches</h3>
          <img src="images/img-2.png" alt="card"/>
          <a href="#">Shop now</a>
        </div>
        <div class="shop-link">
          <h3>Create with Strip Lights</h3>
          <img src="images/img-3.png" alt="card"/>
          <a href="#">Shop now</a>
        </div>
        <div class="shop-link">
          <h3>Home Refresh Ideas</h3>
          <img src="images/img-4.png" alt="card"/>
          <a href="#">Shop now</a>
        </div>
      </div>
    </section>
    <footer>
      <a href="#" class="footer-title">
        Back to top
      </a>
      <div class="footer-items">
        <ul>
          <h3>Get to Know Us</h3>
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Uk Modern Slavery Statement</a></li>
          <li><a href="#">Amazon Science</a></li>
        </ul>
        <ul>
          <h3>Make Money with Us</h3>
          <li><a href="#">Sell on Amazon</a></li>
          <li><a href="#">Sell on Amazon Business</a></li>
          <li><a href="#">Sell on Amazon Handmade </a></li>
          <li><a href="#">Sell on Amazon Launchpad</a></li>
          <li><a href="#">Supply to Amazon</a></li>
          <li><a href="#">Protect and build your brand</a></li>
          <li><a href="#">Associate Programme</a></li>
          <li><a href="#">Fulfilment by Amazon</a></li>
        </ul>
        <ul>
          <h3>Amazon Payment Methods</h3>
          <li><a href="#">Instalments by Barclays</a></li>
          <li><a href="#">Amazon Platinum Mastercard</a></li>
          <li><a href="#">Amazon Classic Mastercard</a></li>
          <li><a href="#">Gift Cards</a></li> 
          <li><a href="#">Amazon Currency Converter</a></li>
          <li><a href="#">Payment Methods Help</a></li>
          <li><a href="#">Shop with Points</a></li>
          <li><a href="#">Top up Your Accounts</a></li>
          <li><a href="#">Top up Your Accounts in Store</a></li>
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <li><a href="#">COVID-19 and Amazon</a></li>
          <li><a href="#">Track Packages or View Order</a></li>
          <li><a href="#">Delivery Rates and Policies</a></li>
          <li><a href="#">Amazon Prime</a></li>
          <li><a href="#">Return and Replacements</a></li>
          <li><a href="#">Recycling</a></li>
          <li><a href="#">Manage Your Content and Devices</a></li>
        </ul>
      </div>
    </footer>
      
      </>
    )
  }
}
