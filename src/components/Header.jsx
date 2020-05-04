import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <span className="header__title">Trello Apps</span>
            <div className="header__navbar">
                <Link className="navbar__link" to="/">Home</Link>
            </div>
        </div>
    );
}

export default Header;
