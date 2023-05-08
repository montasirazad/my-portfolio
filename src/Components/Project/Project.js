import React from 'react';
import './Project.css';
import client1 from '../../image/client1.PNG';
import { FaAngleRight, FaHandshake } from "react-icons/fa";

const Project = () => {
    return (
        <div className='client-container'>
            <div className='client-detail'>
                <h1> <FaHandshake /> Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <button className='btn btn-danger'>Visit site <FaAngleRight /></button>
            </div>

            <div className='client-image'>
                <img src={client1} alt="" />
            </div>
        </div>
    );
};

export default Project;