import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css";


let Navbar = ()=>{

    return (
    <React.Fragment>
        <nav className="navbar-brand navbar w-100 bg-primary navbar-expand-lg  navbar-dark">
            <div className="container">
                <ul className="navbar-nav  d-flex flex-row justify-content-evenly">
                    <li className="nav-item ">
                        <NavLink to="/" className="nav-link">Book Ticket</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">My Tickets</NavLink>
                    </li>

                    <li className="nav-item ml-auto">
                        <NavLink to="/users/login" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item ml-auto">
                        <NavLink to="/users/register" className="nav-link">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
    );

}

export  default  Navbar;
