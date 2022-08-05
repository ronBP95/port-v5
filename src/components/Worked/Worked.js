import React from 'react';
import './Worked.css'

const Worked = () => {

    return (
        <div className='worked'>
            <div className='workedHeader'>
                <p><span id="workednum">02.</span> Where I've Worked</p>
                <div id='workline'></div>
            </div>
            <br></br>
            <div className='workedContent'>
                <ul className='workedNav'>
                    <li className='jobItem'>Ritual</li>
                    <li className='jobItem'>One Community</li>
                    <li className='jobItem'>Johnson & Johnson</li>
                    <li className='jobItem'>Uber</li>
                </ul>
                <div className='workedJobs'>
                    <h2>Position @ Company</h2>
                    <p>January - February</p>
                    <br></br>
                    <ul className='jobDescription'>
                        <li>Descriptions go here</li>
                        <li>Descriptions go here</li>
                        <li>Descriptions go here</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Worked;