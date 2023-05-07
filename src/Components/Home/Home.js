import React from 'react';
import './Home.css';
import MainNav from '../MainNav/MainNav';
import Banner from '../Banner/Banner';
import Maintenance from '../Maintainence/Maintainance';

const Home = () => {
    return (
        <div className='home-container'>
            <MainNav />
            <Banner/>
            
        </div>
    );
};

export default Home;