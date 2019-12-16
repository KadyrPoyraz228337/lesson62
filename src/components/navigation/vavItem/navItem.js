import React from 'react';
import NavItem from "reactstrap/es/NavItem";
import {NavLink} from "react-router-dom";

import './navItem.css'



const NavItm = (
    {children, to}
) => {
    return (
        <NavItem className='mx-1'>
            {to === '/' ? <NavLink exact to={to}>{children}</NavLink> : <NavLink to={to}>{children}</NavLink>}
        </NavItem>
    );
};

export default NavItm;