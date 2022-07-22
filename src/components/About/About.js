import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about'>
            <div className="aboutwords">
                <div className="aboutText">
                    <div className='aboutHeader'>
                        <p>01. About Me</p>
                        <div id='sideline'></div>
                    </div>
                    
                    <div>
                        <p> Hello! My name is Ron Magpantay and I love building things on the web. My interest in web development began back in 2015 where I learned how to work with HTML + CSS to build a mock sales page for my favorite cars.</p>
                        <p> Fast-forward to today, I've learned how to code and build out websites and databases, provided development services for a non-profit organization, and interned for an engineering team at a multivitamin startup.</p>
                    </div>
                    
                    <div>
                        <p> Here are some of the technnologies I have been working with recently:</p>
                        <div id="techlist">
                            <ul>
                                <li>Javascript</li>
                                <li>Ruby</li>
                                <li>Gatsby</li>
                            </ul>
                            <ul>
                                <li>React</li>
                                <li>Express</li>
                                <li>Mongo</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='aboutpic'>
                    <p> Picture will go here.</p>
                </div>
            </div>
        </div>
    )
}

export default About;