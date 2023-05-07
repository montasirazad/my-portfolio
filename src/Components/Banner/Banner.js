import React from 'react';
import './Banner.css';
import logoImg from '../../image/dp-img.jpg'
const Banner = () => {
    return (
        <div className="banner-container">


            <div className='banner-image-div box'>
                <img src={logoImg}
                    style={{
                        width: '200px',
                         
                        
                    }}
                    alt="" />
            </div>

            <div className='banner-text-div'>
                <h3 className="animate-charcter"> Hi..!</h3> <br />
                <p className="animate-charcter">I'm Montasir Azad.<br /> I develope,create website</p>
            </div>
        </div>
    );
};

export default Banner; 