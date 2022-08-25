import React, { useState } from 'react';
import './Nav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
// import resume from '../../images/resume.pdf'

const Nav = () => {
    const [toggleTest, setTestToggle] = useState(true)
    const testToggle = () => {
        setTestToggle(!toggleTest)
        console.log("toggleTest is now: " + toggleTest)
    }


    const [toggle, setToggle] = useState(true)
    const [hamClass, setHamClass] = useState("hidden")
    const change = () => {
        setToggle(!toggle)
        console.log("toggle is now: " + toggle)
    }
    const handleToggle = (e) => {
        e.preventDefault()
        console.log("Toggled")
        change()
        if (toggle) {
            setHamClass("hamburger")
        } else if (toggle === false) {
            setHamClass("hidden")
        }
    }
    return (
        <div class="nav">
            <div className='navbar'>
                <div id="logo">
                    <div><a href='/'>R</a></div>
                </div>
                <ul className='navmenu'>
                    <li className='navitems'><a href='#about' ><span className='navspan'>01.</span> About</a></li>
                    <li className='navitems'><a href='#experience'> <span className='navspan'>02.</span> Experience</a></li>
                    <li className='navitems'><a href='#projects'><span className='navspan'>03.</span> Work</a></li>
                    <li className='navitems'><a href='#contact'><span className='navspan'>04.</span> Contact</a></li>
                    <a id="resumebutton" target='_blank' href='/resume'>Resume</a>
                </ul>
                <div id="dropdown">
                    <p onClick={handleToggle}><GiHamburgerMenu /></p>
                </div>
            </div>
            <div class={hamClass}>
                <div class="hamParent">
                    <ul class="hamMenu">
                        <li className='hamItems'><span className='navspan'>01.</span><a href='#about' onClick={handleToggle}> About</a></li>
                        <li className='hamItems'><span className='navspan'>02.</span><a href='#experience' onClick={handleToggle}> Experience</a></li>
                        <li className='hamItems'><span className='navspan'>03.</span><a href='#projects' onClick={handleToggle}> Work</a></li>
                        <li className='hamItems'><span className='navspan'>04.</span><a href='#contact' onClick={handleToggle}> Contact</a></li>
                        <a id="hamResume" target='_blank' href='/resume'>Resume</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;