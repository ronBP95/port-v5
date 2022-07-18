import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='aboutpage'>
            <div className="aboutwords">
                <div className="aboutText">
                    <div>
                        <p>01. About Me ----------------</p>
                    </div>
                    
                    <div>
                        <p> Inner text will go here.</p>
                    </div>
                    
                    <div>
                        <p> Technologies will go here.</p>
                    </div>
                </div>


                <div className='aboutpic'>
                    <p> Picture will go here.</p>
                </div>
            </div>
        </div>
    )
}

export default About;