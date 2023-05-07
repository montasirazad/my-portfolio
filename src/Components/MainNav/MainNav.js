import React from 'react';
import { BiCodeBlock } from 'react-icons/bi';
import './MainNav.css';
import logoImg from '../../image/dp-img.jpg';

// style={{ fontSize: '40px' }}
const MainNav = () => {
    return (
        <div className='nav-container'>
{/* 
            <img src={logoImg}
                style={{
                    width: '12%',
                    borderRadius: '50%'
                }}
                alt="" /> */}

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Project</a>
            <a href="">Contact</a>


        </div>
    );
};

export default MainNav;