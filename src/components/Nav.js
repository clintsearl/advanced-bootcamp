import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"


const Nav=()=>{
    return(
        <div >
           <FontAwesomeIcon icon={faBars} className="scrolling"/>
            <ul className="Navbar">
                <li>
                    <NavLink to="/">Home</NavLink>
           
                </li>
                <li>
                    <button href=".hero">Register Now</button>
                </li>
                <li>
                    {/* <link href=".contact">Contact</link> */}
                </li>
        </ul>
        </div>
        );
}

export default Nav