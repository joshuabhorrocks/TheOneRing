import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../media/TORlogo.jpg";

const NavBar = () => {
    return (
        <header className="nav-header">
                <img className="nav-logo" src={logo} alt="The One Ring Logo"></img>
                <h1 className="nav-title">The One Ring</h1>
                <nav className="navbar">
                    <div className="nav-links">
                        <NavLink to="/" className="nav-link-home">Ring Portal</NavLink>
                        <NavLink to="/announcements" className="nav-link-announcements">Announcements</NavLink>
                        <NavLink to="/staff" className="nav-link-staff">Staff</NavLink>
                        <NavLink to="/links" className="nav-link-links">Links and Rules</NavLink>
                        <a href="http://torlotr.com/players.php" className="nav-link-builds">Your Builds</a>
                    </div>
                </nav>
        </header>
    )
}

export default NavBar;