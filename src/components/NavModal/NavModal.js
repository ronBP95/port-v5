import React, { useState } from 'react';
import './NavModal.css'

const NavModal = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="modal">
            <p>Modal Content</p>
        </div>
    );
}

export default NavModal;
