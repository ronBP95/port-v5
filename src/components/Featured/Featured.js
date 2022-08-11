import React from 'react';
import './Featured.css'
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Image imports
import buhay from '../../images/buhaypomo.png'
import apod from '../../images/apod.png'
import pokemon from '../../images/pokemon.png'

const Featured = () => {
    
    return (
        <div className='featured'>
            <div className='featuredHeader'>
                <p><span className='featuredNum'>03.</span> Some Things I've Worked On</p>
                <div id='featuredLine'></div>
            </div>
            <div className='featuredCont'>
                <div className='alignedProjects'>
                    <div className='projectImageCont'>
                        <img src={buhay} className="projectImage"/>
                    </div>
                    <div className='projectText'>
                        <div className='headerCont'>
                            <h4 className='projectHeader'>Featured Project</h4>
                            <h2 className='projectName'>Buhay Pomodoro</h2>
                        </div>
                        <div className='textBox'>
                            <p>Buhay Pomodoro is an application built with the React framework that was built to replicate the productivity application "LifeAt Spaces". The goal of this application was to gain experience working with React as well as attempting to replicate the LifeAt Spaces application in both the frontend and backend.</p>
                        </div>
                        <div className='projectTech'>
                            <p>React</p>
                            <p>Express</p>
                            <p>Firebase</p>
                        </div>
                        <div className='projectSocials'>
                            <a id="github" href="https://github.com/ronBP95/buhay_pomo" target="_blank" rel="noreferrer noopener"><FiGithub/></a>
                            <a id="github" href="https://buhay-pomo.web.app/" target="_blank" rel="noreferrer noopener"><FiExternalLink/></a>
                        </div>
                    </div>
                </div>
                <div className='offsetProject'>
                    <div className='offsetText'>
                        <div className='headerCont'>
                            <h4 className='projectHeader'>Featured Project</h4>
                            <h2 className='projectName'>Project Name</h2>
                        </div>
                        <div className='offsetTextBox'>
                            <p>Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
                            Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, 
                            this course covers everything from explaining the principles of REST APIs to implementing Spotify's 
                            OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed 
                            to the internet you can add to your portfolio.</p>
                        </div>
                        <div className='offsetTech'>
                            <p>Express</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Postman</p>
                        </div>
                        <div className='offsetSocials'>
                        <a id="github" href="https://github.com/ronBP95/Project-One---Pokemon" target="_blank" rel="noreferrer noopener"><FiGithub/></a>
                            <a id="github" href="https://siasky.net/PACbyVZmnbuRHj3_1MqgJQ_5X9YEn8NVA0uiZ2JQ92A42g/" target="_blank" rel="noreferrer noopener"><FiExternalLink/></a>
                        </div>
                    </div>
                    <div className='offsetImageCont'>
                        <img src={apod} className="offsetImage"/>
                    </div>
                </div>
                <div className='alignedProjects'>
                    <div className='projectImageCont'>
                        <img src={pokemon} className="projectImage"/>
                    </div>
                    <div className='projectText'>
                        <div className='headerCont'>
                            <h4 className='projectHeader'>Featured Project</h4>
                            <h2 className='projectName'>Project Pokemon</h2>
                        </div>
                        <div className='textBox'>
                            <p>Project Pokemon is the first project that I completed during my time at General Assembly. Our assignment was to build out a game of any type and I instantly envisioned a browser based replica of the hit Pokemon games Red + Blue.</p>
                        </div>
                        <div className='projectTech'>
                            <p>Javascript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Blockchain (SIA)</p>
                        </div>
                        <div className='projectSocials'>
                            <a id="github" href="https://github.com/ronBP95/Project-One---Pokemon" target="_blank" rel="noreferrer noopener"><FiGithub/></a>
                            <a id="github" href="https://siasky.net/PACbyVZmnbuRHj3_1MqgJQ_5X9YEn8NVA0uiZ2JQ92A42g/" target="_blank" rel="noreferrer noopener"><FiExternalLink/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;