import { graphql } from 'gatsby';
import React, { useState } from 'react';
import './Worked.css'

// Query for MDX
export const query = graphql`
query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          company
          position
          date
        }
      }
    }
  }
`

const Worked = () => {

const [activeTab, setActiveTab] = useState(1)

const firstJob = () => {
    setActiveTab(1)
}

const secondJob = () => {
    setActiveTab(2)
}

const thirdJob = () => {
    setActiveTab(3)
}

const fourthJob = () => {
    setActiveTab(4)
}

let description = "nothing right now";

if (activeTab === 1 || 2 || 3 || 4) {
    description = activeTab;
} else {
    description = "Something went wrong"
}

    return (
        <div className='worked'>
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
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Worked;