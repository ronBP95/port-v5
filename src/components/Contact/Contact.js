import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div id='contact'>
            <div className='contactCont'>
                <div className='contactText'>
                    <h3 className='contactHeader'>04. What's Next?</h3>
                    <h1>Get In Touch</h1>
                    <p id="contactDesc">I am currently looking for Full Stack Engineering roles! Whether you have a question or you just want to say hello, the best way to reach me is through Linkedin!</p>
                </div>
                <a id='contactButton' href='https://www.linkedin.com/in/ron-magpantay/'>Say Hello</a>
            </div>
        </div>
    )
}

export default Contact;