import React from 'react';
import './Featured.css'

// Image imports
import buhay from '../../images/buhaypomo.png'
import apod from '../../images/apod.png'
import pokemon from '../../images/pokemon.png'

const Featured = () => {
    
    return (
        <div className='featured'>
            <div className='featuredHeader'>
                <p>03. Some Things I've Worked On</p>
            </div>
            <div className='featuredCont'>
                <div className='alignedProjects'>
                    <div className='projectImageCont'>
                        <img src={buhay} className="projectImage"/>
                    </div>
                    <div className='projectText'>
                        <p>Featured Project</p>
                        <p>Project Name</p>
                        <p>Text Box</p>
                        <p>Technologies</p>
                        <p>Icon Links</p>
                    </div>
                </div>
                <div className='alignedProjects'>
                    <div className='projectText'>
                        <p>Featured Project</p>
                        <p>Project Name</p>
                        <p>Text Box</p>
                        <p>Technologies</p>
                        <p>Icon Links</p>
                    </div>
                    <div className='projectImageCont'>
                        <img src={apod} className="projectImage"/>
                    </div>
                </div>
                <div className='alignedProjects'>
                    <div className='projectImageCont'>
                        <img src={pokemon} className="projectImage"/>
                    </div>
                    <div className='projectText'>
                        <p>Featured Project</p>
                        <p>Project Name</p>
                        <p>Text Box</p>
                        <p>Technologies</p>
                        <p>Icon Links</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;