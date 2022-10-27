import React, { useState } from 'react';
import './Worked.css'
import Jobs from './Jobs';

const Worked = () => {

const [activeTab, setActiveTab] = useState(0)

const firstJob = () => {
    setActiveTab(0)
}

const secondJob = () => {
    setActiveTab(1)
}

const thirdJob = () => {
    setActiveTab(2)
}

const fourthJob = () => {
    setActiveTab(3)
}

let description;

if (activeTab === 0 || 1 || 2 || 3) {
    description = activeTab;
} else {
    description = "Something went wrong"
}

    return (
        <div id='worked'>
            <div className='workedHeader'>
                <p><span id="workednum">02.</span> Where I've Worked</p>
                <div id='workline'></div>
            </div>
            <br></br>
            <div className='workedContent'>
                <ul className='workedNav'>
                    <li className='jobItem' onClick={firstJob}>Ritual</li>
                    <li className='jobItem' onClick={secondJob}>One Community</li>
                    <li className='jobItem' onClick={thirdJob}>Johnson & Johnson</li>
                    <li className='jobItem' onClick={fourthJob}>Uber</li>
                </ul>
                <div className='workedJobs'>
                    <Jobs data={activeTab}/>
                </div>
            </div>
            <div id="projects"></div>
        </div>
    )
}

export default Worked;