import { createContext, useState  } from 'react'; 
import jwt_decode from "jwt-decode";  
const DataContext = createContext({}); 

export const DataProvider = ({ children }) => { 
  const [auth, setAuth] = useState({});    

  console.log('DataContext');
  
  // -----------------------------REGISTER-------------------------------------------------------
  const [login, setLogin] = useState(false);
  const promeniFormu = () => { 
    setLogin(!login);
  }


  // -----------------------------LOGIN-------------------------------------------------------
  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
 

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
}

  

    return (
        <DataContext.Provider value={{
            auth, setAuth,
            // login
             user, authTokens, setAuthTokens, setUser , logoutUser,
            // REGISTER
            login, setLogin, promeniFormu,

        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;