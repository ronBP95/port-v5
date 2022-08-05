import React from 'react';
import './Social.css'
import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

const Social = () => {
    return (
        <div className='socialbar'>
            <ul className='socials'>
                <a id="github" href="hhttps://github.com/ronBP95" target="_blank" rel="noreferrer noopener"><FiGithub/></a>
                <a id="linkedin" href="https://www.linkedin.com/in/ron-magpantay/" target="_blank" rel="noreferrer noopener"><FiLinkedin /></a>
                <a id="codepen" href="https://codepen.io/ronBP95" target="_blank" rel="noreferrer noopener"><FiCodepen /></a>
                <div id="vl"></div>
            </ul>
        </div>
    )
}

export default Social;