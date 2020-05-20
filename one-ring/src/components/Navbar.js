import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../media/TORlogo.jpg";

const NavBar = () => {
    return (
        <header className="nav-header">
            <NavLink to="/">
                <img className="nav-logo" src={logo} alt="The One Ring Logo"></img>
            </NavLink>
                <nav className="navbar">
                    <div className="nav-links">
                        <NavLink to="/rules" className="nav-link-rules">Rules</NavLink>
                        <NavLink to="/announcements" className="nav-link-announcements">Announcements</NavLink>
                        <a href="http://torlotr.com/players.php" className="nav-link-builds">Your Builds</a>
                    </div>
                </nav>
        </header>
    )
}

export default NavBar;