import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import  { useState } from 'react';
import axios from "axios";
// pages
import Home from './components/Home'
import Login from './components/LOgin'
import Register from './components/Register'
import About from './components/About'

function App() {

  let get = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  let post = () => {
    axios.post(`http://127.0.0.1:8000/`, {
      firstName: 'Muhammed',
      lastName: 'Talić'
    })
      .then((response) => { console.log(response) },
        (error) => { console.log(error) })
  }
  let povuciIzBaze = () => {
    axios.get(`http://127.0.0.1:8000/dajIzBaze/`)
      .then((response) => {
        let rez = response.data[0].fields.question_text;
        console.log(rez)
        console.log(response)
      },
        (error) => { console.log(error) })
  }
  let dajRedIzBaze = () => {
    axios.get(`http://127.0.0.1:8000/dajRedIzBaze/1/`)
      .then((response) => {
        console.log(response)
      },
        (error) => { console.log(error) })
  }
  let dodajUbazu = () => {
    let date = new Date();
    let timestamps = Math.floor(date.getTime() / 100);

    axios.post(`http://127.0.0.1:8000/spasiPitanje/`, {
      question_text: 'pitanje iz reacta 69',
      pub_date: timestamps,
    })
      .then((response) => {
        console.log(response)
      },
        (error) => { console.log(error) })
  }



  return (
    <div className="App">

      <nav>
        <h1>The Ninja Clothing Company</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about">Products</Link>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={Login}></Route>
          <Route path="/register" element={Register}></Route>
          <Route path="about/*" element={<About />} />
          {/* <Route path="products"        element={<Products/>}/> */}
          {/* <Route path="products/:id/*"  element={<ProductDetails/>}/>  */}
          {/* <Route path="checkout"        element={shopingCard ? <Navigate to="/Products" /> : <p> checkout </p>}/>  */}
          <Route path="*" element={<p> ERROR 404</p>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
