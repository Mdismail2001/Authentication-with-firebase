import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <NavLink to="" className="p-2 font-bold">Homepage</NavLink>                
                <NavLink to="" className="p-2 font-bold">Portfolio</NavLink>
                <NavLink to="/about" className="p-2  font-bold">About</NavLink>

            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost font-bold text-2xl">The Daily Star</a>
        </div>
        <div className="navbar-end gap-5">
            <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" required placeholder="Search" />
            </label>  
            <div className="indicator">
                <FaUserCircle size={40}></FaUserCircle> 
            </div>
        </div>
        </div>
    );
};

export default NavBar;