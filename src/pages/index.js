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
// import ReactGA from 'react-ga';
const heapInit = () => {
    window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};   
    heap.load("YOUR_APP_ID"); 
}

heapInit();

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
