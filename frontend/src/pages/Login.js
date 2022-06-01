import React from 'react'
import {  Col, Card, Row } from 'react-bootstrap';
import { useRef, useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom"
import DataContext from "../context/DataContext"; 
import axios from '../utils/axios'; 
import jwt_decode from "jwt-decode";  
const LOGIN_URL = '/api/token/';

const Login = () => {
    console.log('Login componenta');
    let navigate = useNavigate(); 
    const {   promeniFormu, setAuthTokens, setUser } = useContext(DataContext);

    const userRef = useRef(); 
    const [mail, setMail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');   

    useEffect(() => {
        userRef.current.focus();
    }, []) 
    

    useEffect(() => {
        setErrMsg(''); 
    }, [mail, pwd])


    
    

    const handleSubmitLogin = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({ username: mail, password: pwd }),
                {
                    headers: { 'Content-Type':'application/json' } 
                }
            ); 
            localStorage.setItem('authTokens', JSON.stringify(response?.data))   
            setUser( jwt_decode(JSON.stringify(response?.data)  ))
            setAuthTokens(response?.data) 
             
            setMail('');
            setPwd(''); 
            navigate(`/`);

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            } 
        }
    }  

    const redirect = () => {
        // window.location.href = 'http://localhost:8000/reset_password/';
        window.open('http://localhost:8000/reset_password/', '_blank');
        // maybe can add spinner while loading
        return null;
      }

    
    
    return (
        <Row className="justify-content-md-center pt-5" >
            <Col md="auto" >
                <Card >
                    <Card.Body >
                        <form onSubmit={handleSubmitLogin}>
                            <h3>Sign In</h3>
                            <div className="mb-3">
                                <label htmlFor="mail">Email address</label>
                                <input
                                    type="text"
                                    // type="mail"
                                    className="form-control"
                                    placeholder="Enter email or username"
                                    id="mail"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setMail(e.target.value)}
                                    value={mail}
                                    // required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    // required
                                />
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary ">
                                    Submit
                                </button>
                            </div>
                            <div className=" text-center pt-0">
                            <p className={errMsg ? "text-danger mb-0" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                <p className="forgot-password text-center" onClick={redirect}  style={{cursor:'pointer'}}> 
                                    Forgot  <span className="text-primary" > password?  </span> 
                                    
                                    
                                </p>
                                <p className='mb-0'  onClick={promeniFormu}>  <a href="#a">Register an user</a> </p>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Col >
        </Row>
    )
}

export default Login