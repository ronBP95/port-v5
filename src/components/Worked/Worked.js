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
                    <li className='jobItem'><a>Ritual</a></li>
                    <li className='jobItem'><a>One Community</a></li>
                    <li className='jobItem'><a>Johnson & Johnson</a></li>
                    <li className='jobItem'><a>Uber</a></li>
                </ul>
                <div className='workedJobs'>
                    
                </div>
            </div>
        </div>
    )
}

export default Worked;