import React, {useContext, useEffect} from 'react'
import { ListGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'
  

const About = () => {
  let {user, logoutUser, authTokens} = useContext(DataContext)

  useEffect(()=> {
    getUserInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let getUserInfo = async() => {
    let response = await fetch('http://127.0.0.1:8000/getUserInfo/', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
    })
    let data = await response.json()
     if(response.status === 200){
       console.log(data, 'daj user info');
        // setUserInfo(data)
    }else if(response.statusText === 'Unauthorized'){
        logoutUser()
    }
}

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>First name: </ListGroup.Item>
      <ListGroup.Item>Last name:</ListGroup.Item>
      <ListGroup.Item>Email address:</ListGroup.Item>

      <ListGroup.Item>Id agency:</ListGroup.Item>
      <ListGroup.Item>Date of establishment:</ListGroup.Item>

      <ListGroup.Item>Date joined:</ListGroup.Item>
    </ListGroup>
  )
}

export default About