import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import  { useState } from 'react';
// import axios from "axios";
// pages
import Home from './pages/Home'
import Layout from './components/Layout';
import Missing from './pages/Missing';
import About from './pages/About'
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from './pages/Welcome';
// import PrivateRoute from './utils/PrivateRoute' 

function App() {
  return (
    <BrowserRouter>
      <Routes> 
       {/*  <Route path="/" element={<Welcome />} >
          <Route index element={<Login />} /> 
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ForgotPassword />} />
        </Route> */}

        <Route path="user" element={<Welcome />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="about">
            <Route index element={<About />} />
            <Route path="about/:id" element={<About />} />
            <Route path=":id" element={<About />} />
          </Route>
          <Route path="*" element={<Missing />} />
          {/* <Route path="*" element={<Missing />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 