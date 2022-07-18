import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='heropage'>
            <div className='herowords'>
                <h1>Hi, my name is</h1>
                <h1>Ron Magpantay</h1>
                <h1>I build things for the web.</h1>
                <div id="herodesc">
                    <p>I'm a software engineer with natural curiosity and a passion for user experiences. Currently I am a Quality Assurance Intern at Ritual.</p>
                </div>
                <div id="herobutton">
                    <a>Check out my work</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;