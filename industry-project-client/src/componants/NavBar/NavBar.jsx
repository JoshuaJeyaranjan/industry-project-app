import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='nav__innerbox'>
                <div className='nav__fest'></div>
                <div className='nav__event'></div>
            </div>
        </nav>
    );
};

export default NavBar;