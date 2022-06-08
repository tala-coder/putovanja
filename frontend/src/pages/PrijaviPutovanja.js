/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react'
import axios from '../utils/axios';
import DataContext from '../context/DataContext'
import CardPutovanje from './CardPutovanje';
import FormaAddTour from './FormaAddTour';
import FormaAddTourAgencija from './FormaAddTourAgencija';
const PUTOVANJA_AGENCIJA = '/getPutovanjaAgencija/';
const USERINFO_URL = '/getUserInfo/';

const PrijaviPutovanja = () => {
  console.log('Komponenta PrijaviPutovanja');
  const [userInfo, setUserInfo] = useState([])
  const { user, setPutovanjaAgencije, putovanjaAgencije } = useContext(DataContext);
  

  useEffect(() => {
    getUserInfo()
    getPutovanjaAgencija()
  }, [])  

  const getUserInfo = async () => { 
    try { 
        const response = await axios.post(USERINFO_URL,
            {  username: user.username  },  
        ); 
        let data = await response?.data 
        setUserInfo(data[0].fields)  
    } catch (err) { 
       console.log(err);
    }
} 

  const getPutovanjaAgencija = async () => {
    try {
      const response = await axios.post(PUTOVANJA_AGENCIJA,
        { id: user.user_id },
      );
      let data = await response?.data
      console.log('data putovanjaAgencije->', data);
      setPutovanjaAgencije(data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div class="container">
      <div class="row d-flex justify-content-center pt-4 pb-4">
        <div class="col-md-7 col-xs-7  col-sm-7 col-lg-7 pb-3" >
        {userInfo.id_agencije === 0 ? <FormaAddTour />   : <FormaAddTourAgencija />}
          {/* <FormaAddTour /> */}
        </div>
      </div >

      {userInfo.id_agencije === 0 ? 
      <div class="row d-flex justify-content-center pt-4 pb-4">
        {putovanjaAgencije.map(mojaPutovanja => (
          <div class="col-md-5 col-xs-3  col-sm-5 col-lg-3 pb-3" key={mojaPutovanja.id}>
            <CardPutovanje putovanje={mojaPutovanja} {...mojaPutovanja} />
          </div>
        ))}
      </div>   : null}
      
    </div>
  )
}

export default PrijaviPutovanja