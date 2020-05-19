import React from "react"
import "../App.css"
import Nav from "./Nav"
import Contact from "./Contact"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

function Landing(){
    return(
      <div>
      <div className="hero">
        <header className="">
          <Nav/>
          <FontAwesomeIcon icon={faBars} className="scrolling"/>
        </header>
        <div className="hello">
          <h1>Utah's Advanced Warrior Heart Bootcamp</h1>
          <h3>This grabs your attention and makes you want to keep reading.</h3>
          <FontAwesomeIcon icon={faCoffee}/>
          </div>
          </div>
          <content>
            <div className="first-row">
            <h3>What is the Advanced Bootcamp</h3>
              <p>Small paragraph about the Bootcamp and everyone wants to go</p>
              </div>
            <div className="first-row">
            <h3>June 18 -20th</h3>
              <p></p>
            </div>
            <div className="second-row">
            <h3>Wild At Heart</h3>
              <p>Small paragraph about John Eldridge and some core ideas of the larger story</p>
              </div>
          </content>
            <div>
              <Contact />
            </div>
          <footer>
            <p>This is the footer with some contact info on it</p>
          </footer>
          </div>


    )
}

export default Landing;
