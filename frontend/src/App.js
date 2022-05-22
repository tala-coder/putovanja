import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import  { useState } from 'react';
// import axios from "axios";
// pages
import Home from './components/Home'
import Login from './components/Welcome'
import Register from './components/Register'
import About from './components/About'
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from './components/Welcome';


function App() {
   

  return (
    <div >
      <BrowserRouter>
      {/* <nav> */}
        {/* <h1>The Clothing Company</h1> */}
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/about">About</Link> */}
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <Link to="/">HOME</Link>
      {/* </nav> */}
      
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path="/login" element={< Login />}></Route> */}
          {/* <Route path="/register" element={< Register />}></Route> */}
          <Route path="about/*" element={<About />} />
          {/* {<Route path="products"        element={<Products/>}/>} */}
          {/* <Route path="products/:id/*"  element={<ProductDetails/>}/>  */}
          {/* <Route path="checkout"        element={shopingCard ? <Navigate to="/Products" /> : <p> checkout </p>}/>  */}
          <Route path="*" element={<p> ERROR 404</p>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
