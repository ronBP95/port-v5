import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <a className='footerLink' href='https://github.com/ronBP95/port-v5' target='_blank'>
                Made with Gatsby.js & Contentful
                <br></br>
                Hosted on Gatsby Cloud
            </a>
        </div>
    );
}

export default Footer;
