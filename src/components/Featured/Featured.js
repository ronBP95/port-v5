import React from 'react';
import './Featured.css'

const Featured = () => {
    
    return (
        <div className='featured'>
            <div className='featuredHeader'>
                <p>03. Some Things I've Worked On</p>
            </div>
            <div className='featuredCont'>
                <div className='alignedProjects'>
                    <div className='projectImage'>
                        <p>left aligned image goes here</p>
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
                    <div className='projectText'>
                        <p>Featured Project</p>
                        <p>Project Name</p>
                        <p>Text Box</p>
                        <p>Technologies</p>
                        <p>Icon Links</p>
                    </div>
                    </div>
                    <div className='projectImage'>
                        <p>right aligned image goes here</p>
                    </div>
                </div>
                <div className='alignedProjects'>
                    <div className='projectImage'>
                        <p>left aligned image goes here</p>
                    </div>
                    <div className='projectText'>
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
        </div>
    )
}

export default Featured;