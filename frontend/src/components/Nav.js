/* eslint-disable no-unused-vars */
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Navbar, Container, Offcanvas, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import DarkMode from "./DarkMode";
import "../styles/App.css";


const Nav = () => {
    console.log('Nav componenta');
    const navigate = useNavigate();
    let { user, logoutUser, authTokens } = useContext(DataContext);


    let odjava = () => {
        logoutUser();
        navigate('/user')
    }

    
    return (
        <Navbar>
            <Container>
                <a class="navbar-brand" href="/">
                    <img src={"https://www.jungletribe.ba/assets/common/img/logo-jt-green.svg"} height="50px" alt="Logo" />
                </a>
                <Navbar.Toggle /> 
                        <Link className=' navbarText pe-3 ps-4' to="/">HOME</Link>
                        <Link className=' navbarText pe-3' to="/mojaputovanja">MY TOURS </Link>
                        <Link className=' navbarText pe-3' to="/planiranaputovanja">PLANNED TOURS </Link>
                        <Link className=' navbarText pe-3' to="/prijaviputovanja">CREATE TOUR </Link>
                   
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text  >
                        Signed in as:  <Link to="/about">   {user.username}   </Link>
                    </Navbar.Text>
                </Navbar.Collapse>
                <NavDropdown title="" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="about">About me</NavDropdown.Item>
                    <NavDropdown.Item ><p onClick={odjava}> Logout</p></NavDropdown.Item>
                </NavDropdown>
                <DarkMode />
            </Container>
        </Navbar>
    )
}

export default Nav
