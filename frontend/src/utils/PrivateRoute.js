import { Route, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const PrivateRoute = ({children, ...rest}) => {
    const navigate = useNavigate();
    let {user} = useContext(DataContext)
    return(
        <Route {...rest}>{!user ? navigate ('/user') :   children}</Route>
    ) 
}

export default PrivateRoute;