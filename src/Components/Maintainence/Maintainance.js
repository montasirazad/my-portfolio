import React from 'react';
import './Maintenance.css';
import maintenanceImg from '../../image/coming-soon.jpg';


const Maintenance = () => {
    return (
        <div className='msg-div'>
            
            <div className="text-div">
                <h1>hi..!</h1>
                <p>
                    This site is temporarily unavailable due to maintenance.
                </p>
                <p>
                    Please try again later.
                </p>
            </div>
            <div>
                <img src={maintenanceImg} alt="" />
            </div>

        </div>
    );
};

export default Maintenance;