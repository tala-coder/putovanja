import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'
import "../styles/App.css";


const Home = () => {
  console.log('Home componenta');
  const navigate = useNavigate();
  let [question, setQuestion] = useState([])
  let { user, logoutUser, authTokens } = useContext(DataContext)

  useEffect(() => {
    getQuestion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let getQuestion = async () => {
    let response = await fetch('http://127.0.0.1:8000/dajIzBaze/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    // console.log('home buuuuuuuuuuuuuuggggg' , String(authTokens.access))
    if (response.status === 200) {
      setQuestion(data)
    } else if (response.statusText === 'Unauthorized') {
      logoutUser()
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center pt-4'>
        <div className='col-md-7 col-xs-7  col-sm-7 col-lg-8'>
           mapa
        </div>
      </div>
    </div>
  )
}

export default Home

/* 
<ul>
                {question.map(q => (
                    <li key={q.pk} > <p> {q.fields.question_text}  </p>  </li>
                ))}
            </ul>
             */
