import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <div id="logo">
                <div>Logo</div>
            </div>
            <ul className='navmenu'>
                <li className='navitems'>01. About</li>
                <li className='navitems'>02. Experience</li>
                <li className='navitems'>03. Work</li>
                <li className='navitems'>04. Contact</li>
                <div id="resumebutton">Resume</div>
            </ul>
        </div>
    )
}

export default Nav;