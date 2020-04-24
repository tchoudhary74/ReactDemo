import React from 'react';
import './header.css';
import logo from '../../media/icons/VWGoA_Logo.png';

export default function header() {
    return (
        <div className="VWGoA-Logo">
            <img className='logo center-block' src={logo} alt='graphic logo of VWGOA' />
        </div>
    )
}

