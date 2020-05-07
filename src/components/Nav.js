import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav=()=>{
    return(
        <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/advanced">What is Advanced</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </>
        );
}

export default Nav