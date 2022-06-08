import React, { useContext, useEffect, useState, } from 'react'
import { Button, Form } from "react-bootstrap";
import axios from '../utils/axios';
import DataContext from '../context/DataContext'
const DODAJ_PUTOVANJE = '/postPutovanjeUser/';
const DAJ_AGENCIJE = '/dajAgencije/';



const FormaAddTour = () => {
    const { user } = useContext(DataContext);
    const [agencije, setAgencije] = useState([])
    const [tour, setTour] = useState({
        agencija: "",
        naslov: "",
        opis: "",
        grad: "",
        slika: "",
        pocetak: "",
        kraj: "",
    });

    useEffect(() => {  
        dajAgencije()
    }, [])
    

    const dajAgencije = async () => {  
        try {
            const response = await axios.post(DAJ_AGENCIJE);
            let data = await response?.data
            console.log('data dajAgencije->', data);
            setAgencije(data);
          } catch (err) {
            console.log(err);
          }
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();
        dodajPutovanje(tour)
        console.log('setTour' , tour); 
    };  
     
    const dodajPutovanje = async (tour) => {  
        try {
            const response = await axios.post(DODAJ_PUTOVANJE,
              { id: user.user_id, agencija:tour.agencija , naslov:tour.naslov , opis:tour.opis ,
                grad:tour.grad , slika:tour.slika , pocetak:tour.pocetak ,kraj:tour.kraj  },
            );
            let data = await response?.data
            console.log('data dodajPutovanje->', data);
            setTour({ agencija: "", naslov: "", opis: "", grad: "", slika: "", pocetak: "", kraj: "", });
          } catch (err) {
            console.log(err);
          }
    }; 


    return (
        <Form onSubmit={handleSubmit}>
            <h2> Suggest a tour </h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Choose an agency:</Form.Label>
                <select id="agencija" name="agencija" onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })}>
                    {agencije.map((agencija) => {
                     return (
                        <option value={agencija.id}>{agencija.naziv}</option>
                    )
                    })} 
                </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter country"
                    name="naslov"
                    value={tour.naslov}
                    onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description"
                    name="opis"
                    value={tour.opis}
                    onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city"
                    name="grad"
                    value={tour.grad}
                    onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })} />
            </Form.Group>

            <Form.Label>Picture</Form.Label> <br />
            <label htmlFor="myfile">Type image link or select a file :</label>
            <input type="file" id="myfile" name="myfile" />  <br />
            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Link picture"
                    name="slika"
                    value={tour.slika}
                    onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })} />
            </Form.Group>

            <Form.Label>Type</Form.Label>
            <div class="d-flex justify-content-start">
                <Form.Group className="mb-3 pe-3" controlId="formBasicCheckbox1">
                    <Form.Check type="checkbox" label="Organized" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Private"
                        name="tip"
                        value={tour.tip}
                        onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })} />
                </Form.Group>
            </div>

            <label htmlFor="date">Beginning date</label>
            <input
                type="date"
                className="form-control"
                placeholder="Date"
                id="date"
                name="pocetak"
                value={tour.pocetak}
                onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })} />

            <label htmlFor="date">End date </label>
            <input
                type="date"
                className="form-control"
                placeholder="Date"
                id="date2"
                name="kraj"
                value={tour.kraj}
                onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })} />

            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label>Max price</Form.Label>
                <Form.Control type="number" placeholder="Enter max price"
                    name="price"
                    value={tour.price}
                    onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })} />
            </Form.Group>

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormaAddTour