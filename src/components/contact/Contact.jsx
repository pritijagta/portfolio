import React from 'react'
import "./contact.css"
import phone from "../../image/phone.jpg"
import email from "../../image/email.jpg"
import location from "../../image/location.jpg"
import {useState,useRef} from "react"

import emailjs from '@emailjs/browser';

export default function Contact({id}) {

  const [Name,setName]=useState("")
  const [Subject,setSubject]=useState("")
  const [Email,setEmail]=useState("")
  const [Message,setMessage]=useState("")
  const [notification, setNotification] = useState({ message: "", type: "" });

  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s92hs0f', 'template_rc1vstb', form.current, {
        publicKey: '-lN5-3dUxM2xBj4Fe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setNotification({ message: "Thank You..Email sent successfully!", type: "success" });
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          setNotification({ message: "Failed to send email.", type: "error" });
        },
      );

      
  };

  function handlechange(e){
   
      const { name, value } = e.target;
      if (name === "user_name") {
        setName(value);
      } else if (name === "user_subject") {
        setSubject(value);
      } else if (name === "user_email") {
        setEmail(value);
      } else if (name === "message") {
        setMessage(value);
      }
  
}
  return (
    <div id={id} className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">
              Let's Create Something Amazing Together
            </h1>
            <div className="c-info">
              <img src={phone} className="c-img" alt=""/>
              9518368812
            </div>
             <div className="c-info">
             <img src={email} className="c-img" alt=""/>
             pritijagtap242@gmail.com
            </div>
            <div className="c-info">
            <img src={location} className="c-img" alt=""/>
            Flat no-15, Keshavamrut Appartment, Gajanan Chowk, Gurudwara Road, Panchavati, Nashik-3.
          </div>

        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your Story? </b>Get in touch. Always available for freelancing the right project along with me.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" value={Name} onChange={handlechange}/>
            <input type="text" placeholder="Subject" value={Subject} name="user_subject" onChange={handlechange} />
            <input type="text" placeholder="Email" value={Email} name="user_email" onChange={handlechange}/>
            <textarea rows="5" placeholder="Message" value={Message} name="message" onChange={handlechange}/>
            <button type="submit">Submit</button>

          </form>
          {
            notification.message && (
            <div className={`notification ${notification.type}`}>
              {notification.message}
            </div> 
          )}
        </div>
      </div>
    </div>
  )
}

