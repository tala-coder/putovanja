import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    console.log('DataContext');

    // -----------------------------SEARCH------------------------------------------------------- 
    const [mojaPutovanja, setMojaPutovanja] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const filteredResults = mojaPutovanja.filter((post) => ((post.naslov).toLowerCase()).includes(search.toLowerCase())
            || ((post.tip).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    }, [mojaPutovanja, search])

    const [planiranaPutovanja, setPlaniranaPutovanja] = useState([])  
    const [search2, setSearch2] = useState('');
    const [searchResults2, setSearchResults2] = useState([]);
    useEffect(() => {
        const filteredResults2 = planiranaPutovanja.filter((post) => ((post.naslov).toLowerCase()).includes(search2.toLowerCase())
            || ((post.tip).toLowerCase()).includes(search2.toLowerCase()));

        setSearchResults2(filteredResults2.reverse());
    }, [planiranaPutovanja, search2])
 
    

    // -----------------------------(Putovanja Agencije))------------------------------------------------------- 
    const [ putovanjaAgencije, setPutovanjaAgencije ] = useState([])
    const [ agencija, setAgencija] = useState(0)
    



    // -----------------------------REGISTER------------------------------------------------------- 
    const [login, setLogin] = useState(false);
    const promeniFormu = () => {
        setLogin(!login);
    }


    // -----------------------------LOGIN-------------------------------------------------------
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')

    }

    // -----------------------------LOGIN, ABOUT-------------------------------------------------------
    const redirect = () => {
        // window.location.href = 'http://localhost:8000/reset_password/';
        window.open('http://localhost:8000/reset_password/', '_blank');
        // maybe can add spinner while loading
        return null;
    } 


    return (
        <DataContext.Provider value={{
            auth, setAuth,
            // login
            user, authTokens, setAuthTokens, setUser, logoutUser,
            // REGISTER
            login, setLogin, promeniFormu,
            // login, about
            redirect,
            // search moja putovanja
            search, setSearch, searchResults, mojaPutovanja, setMojaPutovanja, agencija, setAgencija,
            // search planirana putovanja
            search2, setSearch2, searchResults2, planiranaPutovanja, setPlaniranaPutovanja,
            // prijavi Putovanje
            putovanjaAgencije, setPutovanjaAgencije, 

        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;