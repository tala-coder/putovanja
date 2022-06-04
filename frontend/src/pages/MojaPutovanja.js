import React from 'react'
import CardsPutovanja from './CardsPutovanja'

const MojaPutovanja = () => {


  return ( 
    <div class="container">
      <div class="row d-flex justify-content-center pt-4 pb-4">
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPutovanja />
        </div>
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPutovanja />
        </div>
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPutovanja />
        </div>
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPutovanja />
        </div>
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CardsPutovanja />
        </div>
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