import React from 'react';
import './Navbar.css'
import logo from '../../../images/logo2.png'
import {
    Routes, Route, Outlet, Link, useMatch, useResolvedPath
} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navWrapper'>
            <div className="navItems">
                <div className="navLogo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navLinks">
                    <ul>
                        <li className="singleLink"></li>
                        <li className="singleLink"></li>
                        <li className="singleLink"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;