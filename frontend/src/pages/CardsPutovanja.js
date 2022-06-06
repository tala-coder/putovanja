import React, { useState } from 'react'
import { Button, CardImg } from "react-bootstrap";

const CardsPutovanja = ({ mojaPutovanjas }) => {
    const [view, setView] = useState(true)

    return (
        <div className="row d-flex justify-content-center pt-4 pb-4">
            {mojaPutovanjas.map(mojaPutovanja => (
                <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
                    <div className="card1">
                        <CardImg src={mojaPutovanja.slika} style={{ backgroundSize: "contain" }} alt="Tour img" />
                        <div className="container1">
                            <h4><b> {mojaPutovanja.naslov} </b></h4>
                            <p className='m-0'>  {mojaPutovanja.pocetak}  </p>
                            <p className='m-0'>  {mojaPutovanja.tip}  putovanje</p>
                            <hr className='m-1' /> 
                            
                            {view ? mojaPutovanja.opis.substring(0, 42) + ' ...' : mojaPutovanja.opis}
                            <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setView(!view)}>{view ? 'read more' : 'show less'}</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardsPutovanja