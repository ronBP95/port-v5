import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='heropage'>
            <div className='heroCont'>
                <p id="hi">Hi, my name is</p>
                <p id="name">Ron Magpantay.</p>
                <p id="subName">I build things for the web.</p>
                <p id="heroText">I'm a software engineer that loves to build full stack applications and work with testing tools to ensure high quality. I'm currently working as a Quality Assurance Intern for the Digital Product team at
                <span id="company"> Ritual.</span> </p>
                <p id="heroButton"> <a href="#about">Check out my work!</a> </p>
            </div>
        </div>
    )
}

export default Hero;