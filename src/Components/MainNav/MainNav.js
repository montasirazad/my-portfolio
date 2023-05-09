import React from 'react';
import './MainNav.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';

const MainNav = () => {
    return (
        <div className='nav-container'>

            <Navbar className='col-sm-12 container-fluid' bg="light" expand="lg" sticky="top" style={{ borderBottom: '1px solid lightgray' }}>
                <Container fluid>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ms-auto my-2 mx-5  my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            size='lg'
                        >
                            <Nav.Link as={Link} to="/" className='header mx-4'  >HOME</Nav.Link>
                            <Nav.Link as={HashLink} to='/home#about' className='header mx-4'>About</Nav.Link >
                            <Nav.Link as={HashLink} to='/home#project' className='header mx-4'>Project</Nav.Link>
                            <Nav.Link as={HashLink} to='/home#contact' className='header mx-4'>Contact</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </div>
    );
};

export default MainNav;