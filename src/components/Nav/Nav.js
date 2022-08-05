import React from 'react';
import './Nav.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
    return (
        <div className='navbar'>
            <div id="logo">
                <div><a href='#top'>R</a></div>
            </div>
            <ul className='navmenu'>
                <li className='navitems'><span className='navspan'>01.</span> <a href='#about'>About</a></li>
                <li className='navitems'><span className='navspan'>02.</span> <a href='#experience'>Experience</a></li>
                <li className='navitems'><span className='navspan'>03.</span> <a>Work</a></li>
                <li className='navitems'><span className='navspan'>04.</span> <a>Contact</a></li>
                <div id="resumebutton">Resume</div>
            </ul>
            <div id="dropdown">
                <p><GiHamburgerMenu /></p>
            </div>
        </div>
    )
}

export default Nav;