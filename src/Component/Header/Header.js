import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../image/logo.png'
const Header = () => {
    const navLink={
        fontWeight: 'bold',
        color: 'goldenrod',
      };
    return (
     <div className="header d-flex justify-content-between align-items-center">
         <div className="ps-5">
            <img className="logo" src={logo} alt=""/> 
            <span className="fw-bold fs-4">Global Health</span>
        </div>
        <div className="p-5">
           <nav>
                <NavLink activeStyle={navLink}  to="/home">HOME</NavLink>
                <NavLink activeStyle={navLink} to="/services">SERVICES</NavLink>
                <NavLink activeStyle={navLink} to="/about">ABOUT</NavLink>
                <NavLink activeStyle={navLink} to="/contact">CONTACT</NavLink>
                
                <button><i className="fas fa-search text-muted"></i></button>
            </nav>
        </div>
       
        </div>
    );
};

export default Header;