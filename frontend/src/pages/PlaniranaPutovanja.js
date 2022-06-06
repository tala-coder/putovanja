/* eslint-disable react-hooks/exhaustive-deps */
import CardsPlaniranaPutovanja from './CardsPlaniranaPutovanja'
import React, { useEffect, useContext } from 'react' 
import axios from '../utils/axios';
import DataContext from '../context/DataContext'
// import SearchBar from '../components/SearchBar';
const PLANIRANAPUTOVANJA = '/getPlaniranaPutovanja/';


const PlaniranaPutovanja = () => {
  console.log('Komponenta PlaniranaPutovanja');
  const { user, /* searchResults, planiranaPutovanja, */ setPlaniranaPutovanja } = useContext(DataContext);

  useEffect(() => {
    getMojaPutovanja()
  }, [])

  const getMojaPutovanja = async () => {
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
      <div class="row d-flex justify-content-center pt-4 pb-4">
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPlaniranaPutovanja />
        </div>
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPlaniranaPutovanja />
        </div>
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPlaniranaPutovanja />
        </div>
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPlaniranaPutovanja />
        </div>
        
      </div>
    </div>
  )
}

export default PlaniranaPutovanja