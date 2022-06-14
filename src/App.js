
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import {BrowserRouter as Switch, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Product from './components/Product';
import React, { useState } from 'react';
import LoginUser from './components/LoginUser';
import Details from './components/Details';
import Cart from './components/Cart';
function App() {

  return (
    <div className="App">
     <Navbar />
        <Routes>
        <Route path='/' element= {<Product />} ></Route>
        <Route path='/about/:Pid' element={<About/>}></Route>
        <Route path='/sign' element={<LoginUser />}></Route>
        <Route path='/details' element={<Details/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
