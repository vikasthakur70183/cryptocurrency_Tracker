import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to handle logout
    

    // Define arrays of objects for dropdown menu links
    const Links = [
        { to: '/home', text: 'Home', onClick: () => setIsMenuOpen(false), className: 'links' },
        { to: '/Converter', text: 'Crypto Conveter', onClick: () => setIsMenuOpen(false), className: 'links' },
        // { to: '/profile', text: 'Profile', onClick: () => setIsMenuOpen(false), className: 'links' },
    ];

    return (
        <>
            <header>
                <div className="navbar">
                    <div className="logo">
                        <img className="logo"  alt="Crpto" />
                    </div>
                    <ul className="links">
                        {Links.map((link) => (
                            <li key={link.to}>
                                <Link className={link.className} to={link.to} onClick={link.onClick}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="toggle_btn" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </div>

                <div className={isMenuOpen ? 'dropdown_menu open' : 'dropdown_menu'}>
                    <ul>
                        {Links.map((link) => (
                            <li key={link.to}>
                                <Link className={link.className} to={link.to} onClick={link.onClick}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
