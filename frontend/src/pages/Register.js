import { Col, Card, Row } from 'react-bootstrap';
import { React, useContext, useRef, useState, useEffect } from "react";
import DataContext from '../context/DataContext';
import axios from '../utils/axios';

const REGISTER_URL = '/register/';


const Register = () => {
  console.log('Register componenta');
  const { login, promeniFormu } = useContext(DataContext);

  const userRef = useRef();
  const [user, setUser] = useState('');
  const [agency, setAgency] = useState(false);
  const [mail, setMail] = useState('');
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [pwd, setPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const dopuniFormu = () => {
    setAgency(!agency);
  }

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(REGISTER_URL,
        { user, pwd, mail }
      );
      console.log(JSON.stringify(response))
      setSuccess(true);
      setUser('');
      setMail('');
      setPwd('');
      setMatchPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed')
      }
    }
  }

  return (
    <Row className="justify-content-md-center pt-5" >
      <Col md="auto" >
        <Card >
          <Card.Body >
            <form onSubmit={handleSubmit}>
              <h3>Sign Up</h3>
              <div className="mb-2">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
              </div>

              {agency && <>
                <div className="mb-2">
                  <label htmlFor="id">Id</label>
                  <input
                    type="id"
                    className="form-control"
                    placeholder="Enter id"
                    id="id"
                    autoComplete="off"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date"
                    id="date" 
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    required
                  />
                </div>

              </>}
              <div className="mb-2">
                <label htmlFor="mail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="mail"
                  autoComplete="off"
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" >Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="confrim_password" >Confrim Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confrim password"
                  id="confrim_password"
                  required
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary " disabled={!user || !pwd || !validMatch ? true : false}>
                  Sign Up
                </button>
                <div className=" text-center pt-0">
                  <p className={errMsg ? "text-danger mb-0" : "offscreen"} aria-live="assertive">{errMsg}</p>
                  <p className='mb-0' onClick={promeniFormu}> Already registered <a href="#a">sign in?</a> </p>
                  <p className='mb-0' onClick={dopuniFormu}>  <a href="#a"> {!agency? 'Register an agency' : 'Register an user'} </a> </p>
                </div>
              </div>
            </form>
          </Card.Body>
        </Card>
      </Col >
    </Row>
  )
}

export default Register