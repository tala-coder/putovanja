import React, { useState } from 'react'
import CardsPlaniranaPutovanja from './CardsPlaniranaPutovanja'


const PlaniranaPutovanja = () => {
  
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