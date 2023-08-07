import React from 'react';
import './Banner.css';
import logoImg from '../../image/profile-removebg.png';
import mernLogo from '../../image/mern.png';

const Banner = () => {
    return (
        <div className="banner-container">


            <div className='banner-image-div'>
                <img src={logoImg} alt="" />
            </div>

            <div className='banner-text-div'>
                <p> Hello!</p>
                <h1>I'm Montasir Azad</h1><br />
                <p >    I live in Dhaka,Bangladesh .</p>
                <p >I'm a MERN stack web developer .</p>

            </div>
        </div>
    );
};

export default Banner; 