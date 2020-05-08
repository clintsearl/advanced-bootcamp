import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"


const Nav=()=>{
    return(
        <div >
           
            <ul className="Navbar">
                <li>
                    <NavLink to="/">Home</NavLink>
           
                </li>
                <li>
                    <NavLink to="/about">What is Advanced</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
        </ul>
        </div>
        );
}

export default Nav