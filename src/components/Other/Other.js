import React from 'react';
import './Other.css'
import contentful from 'contentful'

let client = contentful.createClient({
    space: '7fu5o07l6mxg',
    accessToken: 'GM0x2kHdRRFiBWVLYn6LPiM89v94pHYZjOwO0MUEglo',
})

let pullData = client.getEntry('4M0RIEvv488xRnZaYtX2MC').then(function (entry) {
    // logs the entry metadata
    console.log(entry.sys);
  
    // logs the field with ID title
    console.log(entry.fields.productName);
});

console.log(pullData)

const Other = () => {
    return (
        <div className='other'>
            <p>Other</p>
        </div>
    )
}

export default Other;