import React from 'react'
import {NavLink} from 'react-router-dom'
import "../App.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nav=()=>{
    return(
        <div >
            <ul className="Navbar">
                <li>
                    <NavLink to="/">Home</NavLink>
            {/* <FontAwesomeIcon icon={f0c9}/> */}
           
                </li>
                <li>
                    <NavLink to="/advanced">What is Advanced</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
        </ul>
        </div>
        );
}

export default Nav