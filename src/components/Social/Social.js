import React from 'react';
import './Social.css'
import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

const Social = () => {
    return (
        <div className='socialbar'>
            <ul>
                <li id="github"><FiGithub/></li>
                <li id="linkedin"><FiLinkedin /></li>
                <li id="codepen"><FiCodepen /></li>
                <div id="vl"></div>
            </ul>
        </div>
    )
}

export default Social;