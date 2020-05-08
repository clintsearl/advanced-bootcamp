import React from "react"
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

function Landing(){
    return(
        <header>
          <h1>Utah's Advanced Warrior Heart Bootcamp</h1>  
          <FontAwesomeIcon icon={faCoffee}/>
          <FontAwesomeIcon icon={faBars}/>
        </header>
    )
}

export default Landing;
