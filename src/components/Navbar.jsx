import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../ThemeContext';

export default function NavbarComponent() {

    const {darkMode, setDarkMode} = useContext(ThemeContext)

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    return (
        <Navbar bg={darkMode? 'dark': 'light'} variant={darkMode? 'dark': 'light'} >
            <Container>
                <Navbar.Brand href='/' >Explore World</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="http://countrylayer.com/" target='_blank' >Countries REST API</Nav.Link>
                    <Nav.Link href="http://countrylayer.com/" target='_blank'><FontAwesomeIcon icon={faGlobeAsia} /></Nav.Link>
                </Nav>
                <Nav>
                    <Button onClick={toggle} variant='transparent' className={darkMode? 'text-light': 'text-dark'} >
                        <FontAwesomeIcon icon={faMoon}  /> {darkMode ? 'Light mode' : 'Dark mode'}
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    )
}
