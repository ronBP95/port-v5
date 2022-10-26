import * as React from 'react';
import './Nav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'
import resume from '../../images/resume.pdf'

const stickyNav = {
    display: "flex",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 3px 5px black",
    background: "#0a192f",
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
    color: "lightgray",
    transition: "0.5s",
}

const navbar = {
    display: "flex",
    position: "relative",
    top: 0,
    zIndex: 1000,
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0a192f",
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
    color: "lightgray",
    transition: "0.5s",
}

const Nav = () => {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const [toggle, setToggle] = React.useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div style={scrollPosition === 0 ? navbar : stickyNav}>
            <div id="logo">
                <div><a href='/'>R</a></div>
            </div>
            <ul className='navmenu'>
                <li className='navitems'><a href='#about'><span className='navspan'>01.</span> About</a></li>
                <li className='navitems'><a href='#experience'> <span className='navspan'>02.</span> Experience</a></li>
                <li className='navitems'><a href='#projects'><span className='navspan'>03.</span> Work</a></li>
                <li className='navitems'><a href='#contact'><span className='navspan'>04.</span> Contact</a></li>
                <a id="resumebutton" target='_blank' href={resume}>Resume</a>
            </ul>
            <div id="dropdown">
                <p><GiHamburgerMenu onClick={handleToggle}/></p>
            </div>
            <div className={toggle ? "modal" : "hidden"}>
                <p>Modal Content</p>
                <div className="modalIcon"><AiFillCloseCircle /></div>
            </div>
        </div>
    )
}

export default Nav;