import React from 'react'
import { Container,   Row, Col } from 'react-bootstrap'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from './images/DivineDestiny Adventures -logos_black.png'

function ContactUs() {
  return (
    <div >
<Container className='contact-us'>
<div className='contact'>
<h2 className='text-center py-3'>Contact Us</h2>
                <p className='p-1 text-center'>We're here to help you with any questions or inquiries you may have. Feel free to reach out to us using the contact information below:</p>
                <div className="contact-details">
                    <div className="contact-item">
                        <span className="contact-icon px-2 "><FaEnvelope/></span>
                        <span className="contact-info px-2">info@yourtravelvoyage.com</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon px-2"><FaPhone/></span>
                        <span className="contact-info px-2">+1 (123) 456-7890</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon px-2"><FaMapMarkerAlt/></span>
                        <span className="contact-info px-2">123 Travel Street, Cityville</span>
                    </div>
                    <p className='p-3'>We look forward to assisting you in planning your next adventure!</p>
                    <img   src={logo} width={200}/>
                </div>
               
                
</div>
</Container>
    </div>
  )
}

export default ContactUs