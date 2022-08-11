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
                <p>03. Some Things I've Worked On</p>
            </div>
            <div className='featuredCont'>
                <div className='alignedProjects'>
                    <div className='projectImageCont'>
                        <img src={buhay} className="projectImage"/>
                    </div>
                    <div className='projectText'>
                        <h4>Featured Project</h4>
                        <h2>Buhay Pomodoro</h2>
                        <div className='textBox'>
                            <p>Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, 
                            this course covers everything from explaining the principles of REST APIs to implementing Spotify's 
                            OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed 
                            to the internet you can add to your portfolio.</p>
                        </div>
                        <div className='projectTech'>
                            <p>React</p>
                            <p>Express</p>
                            <p>Firebase</p>
                            <p>Gatsby</p>
                        </div>
                        <div className='projectSocials'>
                            <a id="github" href="https://github.com/ronBP95" target="_blank" rel="noreferrer noopener"><FiGithub/></a>
                            <a id="github" href="https://github.com/ronBP95" target="_blank" rel="noreferrer noopener"><FiExternalLink/></a>
                        </div>
                    </div>
                </div>
                <div className='offsetProject'>
                    <div className='offsetText'>
                        <h4>Featured Project</h4>
                        <h2>Project Name</h2>
                        <div className='offsetTextBox'>
                            <p>Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
                            Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, 
                            this course covers everything from explaining the principles of REST APIs to implementing Spotify's 
                            OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed 
                            to the internet you can add to your portfolio.</p>
                        </div>
                        <div className='offsetTech'>
                            <p>React</p>
                            <p>Express</p>
                            <p>Spotify</p>
                            <p>Gatsby</p>
                        </div>
                        <div className='offsetSocials'>
                            <p>GitHub</p>
                            <p>Source Link</p>
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
                        <h4>Featured Project</h4>
                        <h2>Project Name</h2>
                        <div className='textBox'>
                            <p>Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, 
                            this course covers everything from explaining the principles of REST APIs to implementing Spotify's 
                            OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed 
                            to the internet you can add to your portfolio.</p>
                        </div>
                        <div className='projectTech'>
                            <p>React</p>
                            <p>Express</p>
                            <p>Spotify</p>
                            <p>Gatsby</p>
                        </div>
                        <div className='projectSocials'>
                            <p>GitHub</p>
                            <p>Source Link</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;