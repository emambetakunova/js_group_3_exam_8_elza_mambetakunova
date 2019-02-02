import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Main-nav">
            <div className="Logo">Quotes Central</div>
            <NavLink to="/">Quotes</NavLink>
            <NavLink to="/add">Submit new quote</NavLink>
        </div>

    )
};

export default Header;