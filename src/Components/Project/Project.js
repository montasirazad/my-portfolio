import React from 'react';
import './Project.css';
import client1 from '../../image/client1.PNG';
import { FaAngleRight, FaHandshake } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Project = () => {
    return (
        <div className='client-container'>
            <div className='client-detail'>
                <h1> <FaHandshake /> Project, i Worked </h1>
                <h5> <CgWebsite /> Website for dvantagepoint Limited</h5>
                <br />
                <a href="https://dvantagepoint.com/" target='_blank'>
                    <button className='btn btn-danger'>Visit site <FaAngleRight /></button>
                </a>
            </div>

            <div className='client-image'>
                <img src={client1} alt="" />
            </div>
        </div>
    );
};

export default Project;