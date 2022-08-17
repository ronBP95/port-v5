import React from 'react';
import './Nav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
// import resume from '../../images/resume.pdf'

const Nav = () => {
    return (
        <div className='navbar'>
            <div id="logo">
                <div><a href='/'>R</a></div>
            </div>
            <ul className='navmenu'>
                <li className='navitems'><a href='#about'><span className='navspan'>01.</span> About</a></li>
                <li className='navitems'><a href='#experience'> <span className='navspan'>02.</span> Experience</a></li>
                <li className='navitems'><a href='#projects'><span className='navspan'>03.</span> Work</a></li>
                <li className='navitems'><a href='#contact'><span className='navspan'>04.</span> Contact</a></li>
                <a id="resumebutton" target='_blank' href="https://assets.ctfassets.net/7fu5o07l6mxg/7rv5EdQ1JE56WvBzqFawcF/75ef35de4a0e9be8f55b18d0722dddb4/Public_Resume.pdf">Resume</a>
            </ul>
            <div id="dropdown">
                <p><GiHamburgerMenu /></p>
            </div>
        </div>
    )
}

export default Nav;