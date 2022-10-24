import React from 'react';
import './About.css'
import monke from '../../images/wow.webp'

const About = () => {
    return (
        <div id="about">
            <div className="aboutHeader">
                <div><span id="aboutNum">01.</span> About Me</div>
            </div>
            <div className="aboutCont">
                <div className="aboutDesc">
                    <div>Hello! My name is <span id="aboutName">Ron Magpantay</span> and I love building things on the web. My interest in web development began back in 2015 where I learned how to work with HTML + CSS to build a mock sales page for my favorite cars.</div>
                    <br></br>
                    <div>Fast-forward to today, I've learned how to code and build out websites and databases, provided development services for a non-profit organization, and interned for an engineering team at a multivitamin startup.</div>
                    <br></br>
                    <div>I also recently completed an Ecommerce application called Big Store that does everything a an Ecommerce does ranging from Account Creation to Checking out and receiving a receipt.</div>
                    <br></br>
                    <div>Here are a few technologies I've been working with recently:</div>
                    <br></br>
                    <div className="technologies">
                        <ul className="techList">
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                        <ul className="techList">
                            <li>TypeScript</li>
                            <li>Material-UI</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                </div>
                <div className="aboutPicture">
                    <img src={monke} id='monke'></img>
                </div>
            </div>
        </div>
    );
}

export default About;
