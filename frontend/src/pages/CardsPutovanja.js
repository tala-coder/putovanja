import React, { useState } from 'react'
import { Card, Button, Row, CardImg } from "react-bootstrap";

const CardsPutovanja = ({ naslov, slika, kratak_opis, datum_putovanja, tip_putovanja }) => {
    const [view, setView] = useState(true)
    const [putovanja, setPutovanja] = useState({
        naslov: "Zanzibar akcija",
        slika: " https://www.jungletribe.ba/files/images/DALEKE%20DESTINACIJE/Srednja%20Amerika%20i%20Karibi/Kuba/Kuba%20cover%20photo%20i%20baner/Kuba%20crven%20kabriolet.jpg",
        kratak_opis: " Ova daleka destinacija, idealna i za putovanje sa djecom,  ostavit će vas bez daha. Zaronite u pravi tropski raj, upoznajte Stone Town, popijte koktel u čuvenom The Rock-u, obiđite farmu začina i odmorite na najljepšim plažama Tanzanije i Zanzibara.",
        datum_putovanja: "17/05/2020 ",
        tip_putovanja: "Organizovano ",
    });


    return (
        <div >
            <div className="card1">
                <CardImg src={putovanja.slika} alt="Avatar" />
                <div className="container1">
                    <h4><b> {putovanja.naslov} </b></h4>
                    <p className='m-0'>  {putovanja.datum_putovanja}  </p>
                    <p className='m-0'>  {putovanja.tip_putovanja}  putovanje</p>  
                    <hr className='m-1'/>
                    
                     {view ? putovanja.kratak_opis.substring(0, 45) + ' ...' : putovanja.kratak_opis}
                    <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setView(!view)}>{view ? 'read more' : 'show less'}</Button>
                </div>
            </div>
        </div>


    )
}

export default CardsPutovanja