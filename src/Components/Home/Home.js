import React from 'react';
import Banner from '../Banner/Banner';
import MainNav from '../MainNav/MainNav';
import SkillSection from '../SkillSection/SkillSection';
import './Home.css';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div className='home-container'>
            <MainNav />
            <Banner />
            <SkillSection />
            <Project />

        </div>
    );
};

export default Home;