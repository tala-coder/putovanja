/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react' 
import DataContext from '../context/DataContext'
import Maps from './Maps.js'
import "../styles/App.css"; 


const Home = () => {
  console.log('Home componenta');   

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center pt-4'>
        <div className='col-md-7 col-xs-7  col-sm-7 col-lg-8'>
           <Maps />
        </div>
      </div>
    </div>
  )
}

export default Home 