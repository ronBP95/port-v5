import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <div id="logo">
                <div><a href='#top'>Ron</a></div>
            </div>
            <ul className='navmenu'>
                <li className='navitems'><span className='navspan'>01.</span> About</li>
                <li className='navitems'><span className='navspan'>02.</span> Experience</li>
                <li className='navitems'><span className='navspan'>03.</span> Work</li>
                <li className='navitems'><span className='navspan'>04.</span> Contact</li>
                <div id="resumebutton">Resume</div>
            </ul>
            <div id="dropdown">
                <p>Dropdown</p>
            </div>
        </div>
    )
}

export default Nav;