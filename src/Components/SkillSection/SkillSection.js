import React from 'react';
import './SkillSection.css';
import {
    DiHtml5, DiCss3,
    DiJavascript1, DiNodejs,
    DiNpm, DiGit,
    DiReact,
    DiVisualstudio, DiMongodb
} from "react-icons/di";
import { SiExpress, SiFirebase, SiRedux, SiYarn } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";



const SkillSection = () => {

    return (
        <div className='skill-container' id='about'>

            <div className='skill-text animate-charcter'>
                <h1>Tools, i use to work</h1>
            </div>
            <div className='icons-container'>
                <div className='skill-icons'>
                    <DiHtml5 />
                    <p>HTML</p>
                </div>

                <div className='skill-icons'>
                    <DiCss3 />
                    <p>css</p>
                </div>

                <div className='skill-icons'>
                    <DiJavascript1 />
                    <p>JS</p>
                </div>

                <div className='skill-icons'>
                    <BsFillBootstrapFill />
                    <p>Bootstrap</p>
                </div>

                <div className='skill-icons'>
                    <DiNodejs />
                    <p>Node</p>
                </div>

                <div className='skill-icons'>
                    <DiNpm />
                    <p>Npm</p>
                </div>
                <div className='skill-icons'>
                    <SiYarn />
                    <p>Yarn</p>
                </div>
                <div className='skill-icons'>
                    <DiGit />
                    <p>Git</p>
                </div>

                <div className='skill-icons'>
                    <DiReact />
                    <p>React</p>
                </div>
                <div className='skill-icons'>
                    <SiRedux />
                    <p>Redux</p>
                </div>
                <div className='skill-icons'>
                    <SiExpress />
                    <p>Express</p>
                </div >

                <div className='skill-icons'>
                    <DiMongodb />
                    <p>MongoDb</p>
                </div>

                <div className='skill-icons'>
                    <DiVisualstudio />
                    <p>VsCode</p>
                </div>
                <div className='skill-icons'>
                    <SiFirebase />
                    <p>Firebase</p>
                </div>

            </div>
        </div>
    );
};

export default SkillSection;