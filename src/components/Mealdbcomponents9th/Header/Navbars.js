import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Nav.css'
const Navbars = () => {
    return (
        <Navbar  className="p-3 justify-content-evenly" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="divtwao">
            <Navbar.Brand className="fw-bold fs-4" href="#home">Food-FOR-Foodies</Navbar.Brand>
            </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div className="div fw-bold">
            <Navbar.Collapse className="" id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className="text-success" ><NavLink className="navlink" to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink  to="/foods" className="navlink">Regular-Foods</NavLink></Nav.Link>
            <NavDropdown title="OurChef" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
            </div>
    </Navbar>
    );
};

export default Navbars;