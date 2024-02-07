import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="form">Form</Link></li>
            </ul>

        </>
    );
}

export default Nav;