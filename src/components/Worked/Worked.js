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
                <div className='workedNav'>
                    <ul>
                        <li>nav</li>
                        <li>nav</li>
                        <li>nav</li>
                        <li>nav</li>
                    </ul>
                </div>
                <div className='workedJobs'>
                    <p>Here is where the content will go</p>
                </div>
            </div>
        </div>
    )
}

export default Worked;