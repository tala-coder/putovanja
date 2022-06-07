import React, { useState } from 'react'
import { Button, CardImg } from "react-bootstrap";

const CardPutovanje = ({slika, naslov, pocetak, tip, opis}) => {
    const [view, setView] = useState(true)

    return (
        <div className="card1"   >
            <div style={{objectFit:'cover', height:"100%"}}>
                <CardImg src={slika} style={{objectFit:'cover', height:"12em"}} alt="Tour img" />
            </div>
            <div className="container1">
                <h4><b> {naslov} </b></h4>
                <p className='m-0'>  {pocetak}  </p>
                <p className='m-0'>  {tip}  putovanje</p>
                <hr className='m-1' />

                {view ? opis.substring(0, 38) + ' ...' : opis}
                <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setView(!view)}>{view ? 'read more' : 'show less'}</Button>
            </div>
        </div>
    )
}

export default CardPutovanje