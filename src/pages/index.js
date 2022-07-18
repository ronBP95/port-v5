import * as React from "react"
import './index.css'

// component imports
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Social from "../components/Social/Social"
import Name from "../components/Name/Name"

const IndexPage = () => {
    return (
    <div className="page">
        <Nav />
        <div className="pageContent">
            <Social />
            <Hero />
            <Name />
        </div>
    </div>  
    )
}

export default IndexPage
