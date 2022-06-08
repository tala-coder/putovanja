import React, { useContext, useState, } from 'react'
import { Button, Form } from "react-bootstrap";
import axios from '../utils/axios';
import DataContext from '../context/DataContext'



const FormaAddTour = () => {
    const { user } = useContext(DataContext);

    const [tour, setTour] = useState({
        agencija: "",
        tip: "",
        naslov: "",
        opis: "",
        grad: "",
        slika: "",
        pocetak: "",
        kraj: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // dodajPutovanje(tour)
        console.log('setTour' , tour);
        
        setTour({ agencija: "", tip: "", naslov: "", opis: "", grad: "", slika: "", pocetak: "", kraj: "", });
    };


    return (
        <Form onSubmit={handleSubmit}>
            <h2> Suggest a tour </h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Choose an agency:</Form.Label>
                <select id="agencija" name="agencija" onChange={(e) => setTour({ ...tour, [e.target.name]: e.target.value })}>
                    <option value="saab">Centrotrans</option>
                    <option value="41">Novela </option>
                    <option value="fiat">Nomadik</option>
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
            <label for="myfile">Type image link or select a file :</label>
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