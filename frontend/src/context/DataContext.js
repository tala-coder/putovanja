import { createContext, useState, useEffect } from 'react';
import api from '../api/axios';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [auth, setAuth] = useState({});    
    return (
        <DataContext.Provider value={{
            auth, setAuth
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;