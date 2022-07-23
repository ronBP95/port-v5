import React from 'react';
import './About.css'
import monke from '../../images/monke.jpg'
import { BiRightArrow } from 'react-icons/bi'

const About = () => {
    return (
        <div id='about'>
            <div className="aboutwords">
                <div className="aboutText">
                    <div className='aboutHeader'>
                        <p><span id="aboutnum">01.</span> About Me</p>
                        <div id='sideline'></div>
                    </div>
                    
                    <div className='aboutDesc'>
                        <br></br>
                        <p> Hello! My name is Ron Magpantay and I love building things on the web. My interest in web development began back in 2015 where I learned how to work with HTML + CSS to build a mock sales page for my favorite cars.</p>
                        <br></br>
                        <p> Fast-forward to today, I've learned how to code and build out websites and databases, provided development services for a non-profit organization, and interned for an engineering team at a multivitamin startup.</p>
                    </div>
                    
                    <div className='techDesc'>
                        <br></br>
                        <p> Here are some of the technnologies I have been working with recently:</p>
                        <br></br>
                        <br></br>
                        <div id="techlist">
                            <ul className='aboutUl'>
                                <li><BiRightArrow className='arrow'/> Javascript (ES6+)</li>
                                <li><BiRightArrow className='arrow'/> Ruby</li>
                                <li><BiRightArrow className='arrow'/> Gatsby</li>
                            </ul>
                            <ul className='aboutUl'>
                                <li><BiRightArrow className='arrow'/> React</li>
                                <li><BiRightArrow className='arrow'/> Express</li>
                                <li><BiRightArrow className='arrow'/> Mongo</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='aboutpic'>
                    <img src={monke} id='monke'></img>
                </div>
            </div>
        </div>
    )
}

export default About;