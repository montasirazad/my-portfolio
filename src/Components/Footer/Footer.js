import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaLinkedinIn, } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


const Footer = () => {
    return (
        <div>
            <div className='footer-container' id='contact'>

                <div className="footer-text animate-charcter">
                    <h1>Get in touch</h1>


                </div>
                <div>
                    <h5>
                        <FiMail /> montasirazad@gmail.com
                    </h5>
                    <a href="https://www.facebook.com/montasir.azad/" target='_blank'>
                        <FaFacebookSquare style={{ fontSize: '40px', margin: '10px', textDecoration: 'none' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/montasir-azad-525094123/" target='_blank'>
                        <FaLinkedinIn style={{ fontSize: '40px', margin: '10px', textDecoration: 'none' }} />
                    </a>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>© Montasir Azad {new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer;