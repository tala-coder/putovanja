import React from 'react'
import { useContext } from "react"; 
import newyork from '../slike/newyork.png';
import plane from '../slike/plane.png';
import cloud from '../slike/cloud.png';
import boat from '../slike/boat.png';
import Login from './Login.js'
import Register from './Register.js' 
import DataContext from '../context/DataContext';


const Welcome = () => {
  const { login, promeniFormu } = useContext(DataContext);   
  
  return (
    <>
      
      <div className="scene"> 
        <img src={newyork} className='city' alt='slika1' />
        <img src={plane} className='plane' alt='slika2' />
        <img src={cloud} className='cloud cloud-1' alt='slika3' />
        <img src={cloud} className='cloud cloud-2' alt='slika4' />
        <img src={cloud} className='cloud cloud-3' alt='slika5' />
        <img src={boat} className='boat' alt='slika6' />

        
        { !login? <Register /> : <Login />}
        {/* <Register /> */}
        {/* <Login /> */}
      
      
      </div>
    </>
  );
}

export default Welcome 