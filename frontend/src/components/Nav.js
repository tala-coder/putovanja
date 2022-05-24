import { Link } from 'react-router-dom'; 

const Nav = () => { 
    console.log('Nav componenta');
    return (
        <nav className="Nav">
            <p> navBar</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Login">Login</Link></li>
                <li><Link to="nesto">nesto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
