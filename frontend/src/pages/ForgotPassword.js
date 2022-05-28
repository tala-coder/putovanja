import React from 'react'
import newyork from '../slike/newyork.png';
import plane from '../slike/plane.png';
import cloud from '../slike/cloud.png';
import boat from '../slike/boat.png';
import {useState} from 'react';
import { Col, Card, Row } from 'react-bootstrap';

const handleSubmitResetPassword = async (e) => {
  e.preventDefault(); 
  try {
      // const response = await axios.post(LOGIN_URL, 
      //     JSON.stringify({ username:'mirzad', password:'sifra123' }),
      //     {
      //         headers: { 'Content-Type':'application/json' } 
      //     }
      // );  
        
      // navigate(`/`);
      console.log('handleSubmitResetPassword -> TODO');

  } catch (err) {
      console.log('ERROR RESET_PASSWORD', err);
      
  }
}  


const ForgotPassword = () => {
  const [mail, setMail] = useState('');

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
                  <button type="submit" className="btn btn-primary ">
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