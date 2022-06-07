/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react'
import CardsPutovanja from './CardsPutovanja'
import axios from '../utils/axios';
import DataContext from '../context/DataContext'
import SearchBar from '../components/SearchBar';
const MOJAPUTOVANJA = '/getMojaPutovanja/';

const MojaPutovanja = () => {
  console.log('Komponenta MojaPutovanja');
  const { user, searchResults,setMojaPutovanja } = useContext(DataContext);

  useEffect(() => {
    getMojaPutovanja()
  }, [])

  const getMojaPutovanja = async () => {
    try {
      const response = await axios.post(MOJAPUTOVANJA,
        { id: user.user_id },
      );
      let data = await response?.data
      console.log('data mojaPutovanja->', data);
      setMojaPutovanja(data)
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div class="container">
      <SearchBar />
      <div class="row d-flex justify-content-center pt-4 pb-4">
        {
          searchResults.length ? (
            <CardsPutovanja mojaPutovanjas={searchResults} />
          ) : (
            <p style={{ marginTop: "2rem" }}>
              No tour to display.
            </p>
          )
        }
      </div>
    </div>
  )
}

export default MojaPutovanja


/*
<div className='row d-flex justify-content-center pt-4'>
        <div className='col-md-10 col-xs-10  col-sm-10 col-lg-11'>
          {  mapirat }
          <CardsPutovanja />   
           {  <CardsPutovanja podaci={ putovanja.naslov, putovanja.slika, putovanja.kratak_opis, putovanja.datum_putovanja, putovanja.tip_putovanja }/>  }
        </div>
      </div> 

      */