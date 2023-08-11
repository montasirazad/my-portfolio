import React from 'react';
import './Project.css';
import client1 from '../../image/client1.PNG';
import { FaAngleRight, FaHandshake } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Link } from 'react-router-dom';
import genGenie from '../../image/GenGenie.png';
import dvp_logo from '../../image/dvp_logo.png';

// https://gengenie.io/
// "https://dvantagepoint.com/"

const Project = () => {
    return (
        <div>
            <div className="title-div">
                <h1>Recent Projects I have worked on</h1>
            </div>
            <div className='client-container' id="project">
                <div className='client-card'>
                    <img src={genGenie} alt="" />
                    <p>I created the front end part of this project.</p>
                    <Link target='_blank' to="https://gengenie.io"><button>Visit Site</button></Link>
                </div>

                <div className='client-card'>
                    <img src={dvp_logo} alt="" />
                    <p>I created this portfolio website for Dvantagpoint Limited.</p>
                    <Link target='_blank' to="https://dvantagepoint.com/"><button>Visit Site</button></Link>
                </div>
            </div >
        </div>
    );
};

export default Project;