import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import  { useState } from 'react';
// import axios from "axios";
// pages
import Home from './pages/Home'
import Login from './pages/Welcome'
import Register from './pages/Register'
import About from './pages/About'
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from './pages/Welcome';
import PrivateRoute from './utils/PrivateRoute'


function App() {
   

  return (
    <div >  
      <BrowserRouter>
        <nav>
          <h1>pocetna </h1>
          <Link to="/">Home</Link>
          <Link to="/welcome">Welcome</Link>
          <Link to="/about">about</Link>
        </nav>
        <Routes>
          <Route path="/"             element={<Home/>} />
          <Route path="/about"        element={<About/>}/>
          <Route path="/welcome"      element={<Welcome/>}/>
          <Route path="/About/:id"    element={<About/>}/> 
          {/* <Route path="/checkout"     element={shopingCard ? <Navigate to="/About" /> : <p> checkout </p>}/>  */}
          <Route path="*"             element={<p> ERROR 404</p>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



