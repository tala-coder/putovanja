import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'


const Home = () => {
  console.log('Home componenta');
  const navigate = useNavigate();
  let [question, setQuestion] = useState([])
  let {user, logoutUser, authTokens} = useContext(DataContext)
 
  useEffect(()=> {
    getQuestion()
  }, [])

  let getQuestion = async() => {
    let response = await fetch('http://127.0.0.1:8000/dajIzBaze/', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
    })
    let data = await response.json()
    // console.log('home buuuuuuuuuuuuuuggggg' , String(authTokens.access))
    // console.log(data);
    if(response.status === 200){
        setQuestion(data)
    }else if(response.statusText === 'Unauthorized'){
        logoutUser()
    }
    
}

let odjava = () => {
   logoutUser();
   navigate('/welcome')
}
  // console.log('user buuuuuuuuuuuuuuuuuuuug', user);
  
  return (
    <div>Home  
      {user &&   <p>zovem se {user.username}</p>}
      <p onClick={odjava}> odjavi se</p>

      <ul>
                {question.map(q => (
                    <li key={q.pk} > <p> {q.fields.question_text}  </p>  </li>
                ))}
            </ul>
    </div>
  )
}

export default Home