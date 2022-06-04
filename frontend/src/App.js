import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import  { useState } from 'react';
// import axios from "axios";
// pages
import Home from './pages/Home'
import Layout from './components/Layout';
import MojaPutovanja from './pages/MojaPutovanja';
import PlaniranaPutovanja from './pages/PlaniranaPutovanja';
import PrijaviPutovanja from './pages/PrijaviPutovanja';
import Missing from './pages/Missing';
import About from './pages/About'
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from './pages/Welcome';
// import PrivateRoute from './utils/PrivateRoute' 

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="user" element={<Welcome />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about"              element={<About />} /> 
          <Route path="mojaputovanja"      element={<MojaPutovanja />} /> 
          <Route path="planiranaputovanja" element={<PlaniranaPutovanja />} /> 
          <Route path="prijaviputovanja"   element={<PrijaviPutovanja />} /> 
          <Route path="*"                  element={<Missing />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
<Route index element={<Home />} />
           <Route path="about">
            <Route index element={<About />} /> 
            <Route path=":id" element={<About />} />
          </Route>
*/