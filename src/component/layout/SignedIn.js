import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedIn = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">GG</NavLink></li>
        </ul>
    )
}

export default SignedIn