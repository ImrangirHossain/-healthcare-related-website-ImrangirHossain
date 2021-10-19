import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <nav className="header navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> 
          <img className="logo" src={logo} alt=""/> 
            <span className="fw-bold fs-4">Global Health</span>     
        </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold" aria-current="page" to="/home">HOME</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold" aria-current="page" to="/services">SERVICES</Link>
              </li>
              <li className="nav-item px-3">
                <Link  className="nav-link active fw-bold" aria-current="page" to="/appointment">APPOINTMENT</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold" aria-current="page" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold" aria-current="page" to="/payment">ONLINE PAYMENT</Link>
              </li>
             
             <li className="nav-link active fw-bold px-2">
                {!user?.email && <NavLink to="/Login">LOGIN</NavLink>}
                <span>{user.displayName} </span>
                {user?.email && <NavLink  onClick={logOut} to="/Login">LOGOUT</NavLink>}
             </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;