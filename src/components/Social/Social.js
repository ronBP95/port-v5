import React from 'react';
import './Social.css'
import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const Social = () => {
    return (
        <div className='socialbar'>
            <ul className='socials'>
                <OutboundLink id="github" href="https://github.com/ronBP95" target="_blank" rel="noreferrer noopener"><FiGithub/></OutboundLink>
                <OutboundLink id="linkedin" href="https://www.linkedin.com/in/ron-magpantay/" target="_blank" rel="noreferrer noopener"><FiLinkedin /></OutboundLink>
                <OutboundLink id="codepen" href="https://codepen.io/ronBP95" target="_blank" rel="noreferrer noopener"><FiCodepen /></OutboundLink>
                <div id="vl"></div>
            </ul>
        </div>
    )
}

export default Social;