import * as React from "react"
import './index.css'

// component imports
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"

const IndexPage = () => {
    return (
    <div className="page">
        <Nav />
        <Hero />
    </div>  
    )
}

export default IndexPage
