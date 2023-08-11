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
import { SiTailwindcss } from "react-icons/si"


const SkillSection = () => {

    return (
        <div className='skill-container'>

            <div className='skill-text'>
                <h1>Tools, i use to work</h1>
            </div>

            <div className='skill-element'>

                <h3>Language</h3>
                <div className="icon-div">

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
                </div>
            </div>


            <div className="skill-element">
                 
                    <h3>Library</h3>
                
                <div className="icon-div">
                    <div className='skill-icons'>
                        <DiReact />
                        <p>React</p>
                    </div>
                    <div className='skill-icons'>
                        <SiRedux />
                        <p>Redux</p>
                    </div>
                </div>

            </div>

            <div className="skill-element">
                
                    <h3>css framework</h3>
                 
                <div className="icon-div">
                    <div className='skill-icons'>
                        <BsFillBootstrapFill />
                        <p>Bootstrap</p>
                    </div>
                    <div className='skill-icons'>
                        <SiTailwindcss />
                        <p>Tailwind</p>
                    </div>
                    <div className='skill-icons'>

                        <p>Material Ui</p>
                    </div>
                </div>

            </div>

            <div className="skill-element">
               
                    <h3>package manager</h3>
           
                <div className="icon-div">
                    <div className='skill-icons'>
                        <DiNpm />
                        <p>Npm</p>
                    </div>
                    <div className='skill-icons'>
                        <SiYarn />
                        <p>Yarn</p>
                    </div>
                </div>
            </div>

            <div className='skill-element'>
                
                    <h3>Server side</h3>
                

                <div className="icon-div">
                    <div className='skill-icons'>
                        <DiNodejs />
                        <p>Node</p>
                    </div>
                    <div className='skill-icons'>
                        <SiExpress />
                        <p>Express</p>
                    </div >
                    <div className='skill-icons'>
                        <DiMongodb />
                        <p>MongoDb</p>
                    </div>
                </div>
            </div>

            <div className="skill-element"> 
                    <h3>Other Tools</h3>
                
                <div className="icon-div">
                    <div className='skill-icons'>
                        <DiVisualstudio />
                        <p>VsCode</p>
                    </div>
                    <div className='skill-icons'>
                        <SiFirebase />
                        <p>Firebase</p>
                    </div>
                    <div className='skill-icons'>
                        <DiGit />
                        <p>Git</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SkillSection;