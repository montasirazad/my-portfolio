import React from 'react';
import './Banner.css';
import logoImg from '../../image/dp-img.jpg';
import mernLogo from '../../image/mern.png';

const Banner = () => {
    return (
        <div className="banner-container">


            <div className='banner-image-div'>
                <img src={logoImg}

                    alt="" />
            </div>

            <div className='banner-text-div'>
                <h3 className="animate-charcter"> Hi..!</h3> <br />
                <p className="animate-charcter">I'm Montasir Azad<br />
                    I live in Dhaka,Bangladesh <br /> I'm a MERN stack web developer</p>
                <br />
                <img src={mernLogo} alt="" />
            </div>
        </div>
    );
};

export default Banner; 