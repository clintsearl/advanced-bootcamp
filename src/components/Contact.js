import React, {useState} from 'react'
import emailjs from 'emailjs-com'


const Contact =()=>{

    const clearForm=()=>{
        this.myFormRef.reset();
    }
    const sendEmail=(e)=> {
        e.preventDefault();
        emailjs.sendForm('default_service', 'contact_form', e.target, 'user_xpP72yPUdaJz3dFKUFjSM')
          .then((result) => {
             console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          .then(alert("Thank you!"))
          .then(window.location.reload(false))   
        }
    // const [count, setCount]= useState(0)




    return(
        <div>
            <form id="contact-form" onSubmit={sendEmail}>
                
                <label>Name</label>
                <input type="text" name="name" required/>
                <label>Email</label>
                <input type="email" name="email" required/>
                <label>Interest Level
                <input type="radio" name="interest" value="I'm ready, sign me up!"/><label>I'm ready, sign me up!</label>
                <input type="radio" name="interest" value="Love to hear More"/><label>Love to hear more!</label></label><br/>
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default Contact