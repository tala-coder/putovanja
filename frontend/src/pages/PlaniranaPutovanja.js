/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react'
import axios from '../utils/axios';
import DataContext from '../context/DataContext'
import SearchBar2 from '../components/SearchBar2';
import CardsPlaniranaPutovanja from './CardsPlaniranaPutovanja';

import CardsPutovanja from './CardsPutovanja'
const PLANIRANAPUTOVANJA = '/getPlaniranaPutovanja/';




const PlaniranaPutovanja = () => {
  console.log('Komponenta PlaniranaPutovanja');
  const { user, searchResults2, setPlaniranaPutovanja } = useContext(DataContext);

  useEffect(() => {
    getPlaniranaPutovanja()
  }, [])

  const getPlaniranaPutovanja = async () => {
    try {
      const response = await axios.post(PLANIRANAPUTOVANJA,
        { id: user.user_id },
      );
      let data = await response?.data
      console.log('data PlaniranaPutovanja->', data);
      setPlaniranaPutovanja(data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div class="container">
      <SearchBar2 />
      <div class="row d-flex justify-content-center pt-4 pb-4">
        {
          searchResults2.length ? (
            <CardsPutovanja mojaPutovanjas={searchResults2} />
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

export default PlaniranaPutovanja