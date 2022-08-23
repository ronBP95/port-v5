import React from 'react';
import './Featured.css'
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Image imports
import buhay from '../../images/buhaypomo.png'
import apod from '../../images/apod.png'
import pokemon from '../../images/pokemon.png'

// Gatsby Google Analytics
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

// Events to be tracked
// Project 1 Clicks (Source + Live)
// Project 2 Clicks (Source + Live)
// Project 3 Clicks (Source + Live)

const Featured = () => {
    
    return (
        <div className='featured'>
            <div className='featuredHeader'>
                <p><span className='featuredNum'>03.</span> Some Things I've Built</p>
                <div id='featuredLine'></div>
            </div>
            <div className='featuredCont'>
                <div className='alignedProjects'>
                    <div className='projectLayer'></div>
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
                            <a id="github" 
                                href="https://github.com/ronBP95/buhay_pomo" 
                                target="_blank" 
                                rel="noreferrer noopener"       
                                onClick={
                                // Lets track that custom click
                                trackCustomEvent({
                                // string - required - The object that was interacted with (e.g.video)
                                category: "Project Views",
                                // string - required - Type of interaction (e.g. 'play')
                                action: "Click",
                                // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                                label: "Buhay Pomo Github View",
                                // number - optional - Numeric value associated with the event. (e.g. A product ID)
                                value: 1,
                                })
                                //... Other logic here
                                }>
                                <FiGithub/>
                            </a>
                            <a id="github" 
                                href="https://buhay-pomo.web.app/" 
                                target="_blank" 
                                rel="noreferrer noopener"                                
                                onClick={
                                // Lets track that custom click
                                trackCustomEvent({
                                // string - required - The object that was interacted with (e.g.video)
                                category: "Project Views",
                                // string - required - Type of interaction (e.g. 'play')
                                action: "Click",
                                // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                                label: "Buhay Pomo Live View",
                                // number - optional - Numeric value associated with the event. (e.g. A product ID)
                                value: 2,
                                })
                                //... Other logic here
                                }>
                                <FiExternalLink/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='offsetProject'>
                    <div className='offsetText'>
                    <div className='projectLayer'></div>
                        <div className='headerCont'>
                            <h4 className='projectHeader'>Featured Project</h4>
                            <h2 className='projectName'>Just Apod</h2>
                        </div>
                        <div className='offsetTextBox'>
                            <p>Just Apod is a simple application with the main purpose of this project 
                            aimed at gaining experience working with Express and API's, which in this case, was 
                            the NASA Open API called "Astronomy Picture of the Day" or APOD for short.</p>
                        </div>
                        <div className='offsetTech'>
                            <p>Express</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Postman</p>
                        </div>
                        <div className='offsetSocials'>
                        <a id="github" href="https://github.com/ronBP95/just_apod" target="_blank" rel="noreferrer noopener"><FiGithub/></a>
                            <a id="github" href="https://rm-just-apod.herokuapp.com/" target="_blank" rel="noreferrer noopener"><FiExternalLink/></a>
                        </div>
                    </div>
                    <div className='offsetImageCont'>
                        <img src={apod} className="offsetImage"/>
                    </div>
                </div>
                <div className='alignedProjects'>
                <div className='projectLayer'></div>
                    <div className='projectImageCont'>
                        <img src={pokemon} className="projectImage"/>
                    </div>
                    <div className='projectText'>
                        <div className='headerCont'>
                            <h4 className='projectHeader'>Featured Project</h4>
                            <h2 className='projectName'>Project Pokemon</h2>
                        </div>
                        <div className='textBox'>
                            <p>Project Pokemon is the first project that I completed during my time at General Assembly. My assignment was to build out a game of any type and I immediately envisioned a browser based replica of the hit Pokemon games Red + Blue.</p>
                        </div>
                        <div className='projectTech'>
                            <p>Javascript</p>
                            <p>HTML</p>
                            <p>CSS</p>
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