import React from 'react'
import newyork from '../slike/newyork.png';
import plane from '../slike/plane.png';
import cloud from '../slike/cloud.png';
import boat from '../slike/boat.png';
import {useState} from 'react';
import { useNavigate } from "react-router-dom"
import axios from '../utils/axios'; 
import { Col, Card, Row } from 'react-bootstrap';
const RESET_PASSWORD_URL = '/auth/users/reset_password/'; 


const ForgotPassword = () => {
  let navigate = useNavigate(); 
  const [mail, setMail] = useState('');
 

  const handleSubmitResetPassword = async (e) => {
    e.preventDefault(); 
    try {
        await axios.post(RESET_PASSWORD_URL, 
            { email:'ahmedhodzichodzic@gmail.com' }
        );  
          
        navigate(`/user`);
  
    } catch (err) {
        console.log('ERROR RESET_PASSWORD', err);
        
    }
  }

  return (
    <div className="scene">
      <img src={newyork} className='city' alt='slika1' />
      <img src={plane} className='plane' alt='slika2' />
      <img src={cloud} className='cloud cloud-1' alt='slika3' />
      <img src={cloud} className='cloud cloud-2' alt='slika4' />
      <img src={cloud} className='cloud cloud-3' alt='slika5' />
      <img src={boat} className='boat' alt='slika6' />

      <Row className="justify-content-md-center pt-5" >
        <Col md="auto" >
          <Card >
            <Card.Body >
              <form onSubmit={handleSubmitResetPassword}>
                <h3>Reset password</h3>
                <div className="mb-3">
                  <label htmlFor="mail">Email address</label>
                  <input
                    type="text"
                    // type="mail"
                    className="form-control"
                    placeholder="Enter email"
                    id="mail" 
                    autoComplete="off"
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                  // required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col >
      </Row>
    </div>
  )
}

export default ForgotPassword