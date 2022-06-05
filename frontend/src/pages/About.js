import React, { useContext, useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import axios from '../utils/axios'; 
import DataContext from '../context/DataContext' 
const USERINFO_URL = '/getUserInfo/';

const About = () => {
  console.log('About componenta');
  let { logoutUser, redirect, user } = useContext(DataContext)
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    getUserInfo()
  }, []) 

  const getUserInfo = async () => { 
    try { 
        const response = await axios.post(USERINFO_URL,
            {  username: user.username  },  
        ); 
        let data = await response?.data 
        setUserInfo(data[0].fields)  
    } catch (err) {
      logoutUser()
       console.log(err);
    }
}
  console.log(userInfo);

  return (
    <div className='App'>
    <ListGroup variant="flush"> 
      <ListGroup.Item>Username: <strong> {userInfo.username} </strong> </ListGroup.Item>
      {userInfo.id_agencije === 0 ? <ListGroup.Item>First name: <strong> {userInfo.first_name} </strong> </ListGroup.Item> : null}
      {userInfo.id_agencije === 0 ? <ListGroup.Item>Last name: <strong> {userInfo.last_name} </strong>  </ListGroup.Item> : null}

      {/* <ListGroup.Item>First name: <strong> {userInfo.first_name} </strong> </ListGroup.Item> */}
      {/* <ListGroup.Item>Last name: <strong> {userInfo.last_name} </strong>  </ListGroup.Item> */}
      <ListGroup.Item>Email address: <strong> {userInfo.email} </strong>  </ListGroup.Item>
      {userInfo.id_agencije > 0 ? <ListGroup.Item>Id agency: <strong> {userInfo.id_agencije} </strong>  </ListGroup.Item> : null}
      {userInfo.id_agencije > 0 ? <ListGroup.Item>Date of establishment: <strong> {userInfo.datum_osnivanja} </strong>  </ListGroup.Item> : null}
      <ListGroup.Item>Date joined: <strong> {userInfo.created_at} </strong>  </ListGroup.Item>
      <ListGroup.Item>Date last update: <strong> {userInfo.updated_at} </strong>  </ListGroup.Item>
      <ListGroup.Item>Password:  <span className="text-primary" onClick={redirect} style={{cursor:'pointer'}}> reset password  </span> </ListGroup.Item> 
    </ListGroup>
    </div>
  )
}

export default About