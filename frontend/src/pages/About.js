import React, { useContext, useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext' 

const About = () => {
  console.log('About componenta');
  let { logoutUser, authTokens, redirect } = useContext(DataContext)
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    getUserInfo()
  }, [])

  let getUserInfo = async () => {
    let response = await fetch('http://127.0.0.1:8000/getUserInfo/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    if (response.status === 200) {
      setUserInfo(data[0].fields)
    } else if (response.statusText === 'Unauthorized') {
      logoutUser()
    }
  }
  console.log(userInfo);

  return (
    <div className='App'>
    <ListGroup variant="flush"> 
      <ListGroup.Item>Username: <strong> {userInfo.username} </strong> </ListGroup.Item>
      <ListGroup.Item>First name: <strong> {userInfo.first_name} </strong> </ListGroup.Item>
      <ListGroup.Item>Last name: <strong> {userInfo.last_name} </strong>  </ListGroup.Item>
      <ListGroup.Item>Email address: <strong> {userInfo.email} </strong>  </ListGroup.Item>
      {userInfo.id_agencije > 0 ? <ListGroup.Item>Id agency: <strong> {userInfo.id_agencije} </strong>  </ListGroup.Item> : null}
      {userInfo.id_agencije > 0 ? <ListGroup.Item>Date of establishment: <strong> {userInfo.username} </strong>  </ListGroup.Item> : null}
      <ListGroup.Item>Date joined: <strong> {userInfo.created_at} </strong>  </ListGroup.Item>
      <ListGroup.Item>Date last update: <strong> {userInfo.updated_at} </strong>  </ListGroup.Item>
      <ListGroup.Item>Password:  <span className="text-primary" onClick={redirect} style={{cursor:'pointer'}}> reset password  </span> </ListGroup.Item> 
    </ListGroup>
    </div>
  )
}

export default About