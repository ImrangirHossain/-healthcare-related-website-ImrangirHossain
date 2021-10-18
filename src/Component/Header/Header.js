import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../image/logo.png'
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const {user,logOut} = useAuth();

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
                {!user?.email && <NavLink activeStyle={navLink} to="/Login">LOGIN</NavLink>}
                <span>{user.displayName} </span>
                {user?.email && <NavLink  onClick={logOut} to="/Login">LOGOUT</NavLink>}
                
                <button><i className="fas fa-search text-muted"></i></button>
            </nav>
        </div>
       
        </div>
    );
};

export default Header;