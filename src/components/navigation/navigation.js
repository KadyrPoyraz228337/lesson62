import React from 'react';
import Navbar from "reactstrap/es/Navbar";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Nav from "reactstrap/es/Nav";
import NavItm from "./vavItem/navItem";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Test page</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItm to='/'>home</NavItm>
                <NavItm to='/aboutUs'>about us</NavItm>
                <NavItm to='/contacts'>contacts</NavItm>
            </Nav>
        </Navbar>
    );
};

export default Navigation;