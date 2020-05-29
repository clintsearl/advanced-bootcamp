import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"


const Nav=()=>{
    return(
        <div className="Navbar">
           <FontAwesomeIcon icon={faBars} className="hamburger"/>
            <ul className="nav-links">
                <li>
                    <NavLink to="/">Home</NavLink>
           
                </li>
                <li>
                   <a href="#contact-form"><button >Register Now</button></a>
                </li>
                <li>
                    {/* <link href=".contact">Contact</link> */}
                </li>
        </ul>
        </div>
        );
}

export default Nav