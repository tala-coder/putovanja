import React, { useState, useContext } from 'react'
import { Button, CardImg } from "react-bootstrap";
import DataContext from '../context/DataContext'
import axios from '../utils/axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css 
const DELETE_PUTOVANJE = '/deletePutovanje/';
const DODAJ_PUTOVANJE = '/addPutovanje/';

const CardPutovanje = ({ id, slika, naslov, pocetak, tip, opis, upit}) => {
    console.log('Komponenta CardPutovanje');
 
    const { user, planiranaPutovanja, setPlaniranaPutovanja } = useContext(DataContext);
    const [view, setView] = useState(true)

    const deleteTour = (id) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this tour?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => deletePutovanjeIzBaze(id) ,
              },
              {
                label: 'No',
                onClick: () => console.log('Odabrali ste opciju nE!'),
              }
            ]
          }); 
    }

    const deletePutovanjeIzBaze = async (id) => {
        try {
          const response = await axios.post(`${DELETE_PUTOVANJE}${id}/`, 
            { id: user.user_id },
          );     
            
          const listItems = await planiranaPutovanja.filter((el) => el.id !== id);
          setPlaniranaPutovanja(listItems); 
          console.log(planiranaPutovanja);

          let data = await response?.data
          console.log('data deletePutovanje->', data);
        } catch (err) {
          console.log(err);
        }
      }

    const addTour = (idPutovanja) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to sign up for this tour?',
            buttons: [
              {
                label: 'Yes',
                onClick: () =>  dodajPutovanjeUBazu(idPutovanja), //dodajPutovanjeUBazu(),
              },
              {
                label: 'No',
                onClick: () => console.log('Odabrali ste opciju NE! add tour'),
              }
            ]
          }); 
    }

    const dodajPutovanjeUBazu = async (idPutovanja) => {
        try {
          const response = await axios.post(DODAJ_PUTOVANJE, 
            { id: user.user_id, idPutovanja: idPutovanja },
          );      
          
          let data = await response?.data
          console.log('data dodajPutovanjeUBazu->', data);
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <div className="card1"   >
            <div style={{ objectFit: 'cover', height: "100%" }}>
                <CardImg src={slika} style={{ objectFit: 'cover', height: "12em" }} alt="Tour img" />
            </div>
            <div className="container1">
                <h4><b> {naslov} </b></h4>
                <p className='m-0'>  {pocetak}  </p>
                <div className="d-flex justify-content-between">
                    <p className="m-0">  {tip}  putovanje</p>
                    {upit === 2 ? <img className="pointer" onClick={() => deleteTour(id)}  src={"https://www.svgrepo.com/show/243958/delete.svg"} height="30px" alt="remove" />
                        : upit === 3 ? <img className="pointer" onClick={() => addTour(id)}   src={"https://www.svgrepo.com/show/184203/user-add.svg"} height="30px" alt="add" />
                            : null} 
                </div> 
                <hr className='m-1' /> 
                {view ? opis.substring(0, 51) + ' ...' : opis}
                <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setView(!view)}>{view ? 'read more' : 'show less'}</Button>
            </div>
        </div>
    )
}

export default CardPutovanje