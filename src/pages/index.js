import * as React from "react"
import './index.css'

// component imports
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Worked from "../components/Worked/Worked"
import Social from "../components/Social/Social"
import Name from "../components/Name/Name"

const IndexPage = () => {
    return (
    <div className="page">
        <Nav />
        <Hero />
        <About />
        <Worked />
        <div className="sidebar">
            <Social />
            <Name />
        </div>
    </div>  
    )
}

export default IndexPage
