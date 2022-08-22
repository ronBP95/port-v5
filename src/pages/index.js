import * as React from "react"
import './index.css'

// nav
import Nav from "../components/Nav/Nav"

// sections
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Worked from "../components/Worked/Worked"
import Featured from "../components/Featured/Featured"
import Other from "../components/Other/Other"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

// sidebars
import Social from "../components/Social/Social"
import Name from "../components/Name/Name"

// React Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);


const IndexPage = () => {
    return (
    <div className="page">
        <Nav />
        <Hero />
        <About />
        <Worked />
        <Featured />
        {/* <Other /> */}
        <Contact />
        <Footer />
        <div className="sidebar">
            <Social />
            <Name />
        </div>
    </div>  
    )
}

export default IndexPage
