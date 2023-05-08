import React from 'react';
import Banner from '../Banner/Banner';
import MainNav from '../MainNav/MainNav';
import SkillSection from '../SkillSection/SkillSection';
import './Home.css';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='home-container'>
            <MainNav />
            <Banner />
            <SkillSection />
            <Project />
            <Footer />

        </div>
    );
};

export default Home;