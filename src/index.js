import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage.js';
import AboutPage from './landing_page/about/AboutPage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import SupportPage from './landing_page/support/SupportPage.js';
import ProductsPage from './landing_page/products/ProductsPage.js';
import Signup from "./landing_page/signup/Signup.js";
import Footer from './landing_page/Footer.js';
import Navbar from './landing_page/Navbar.js';
import NotFound from './landing_page/NotFound.js';
import LogIn from './landing_page/login/Login.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/logIn' element={<LogIn/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/support' element={<SupportPage/>} />
      <Route path='/product' element={<ProductsPage/>} />
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);


