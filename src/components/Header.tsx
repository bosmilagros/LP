import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Milagros Sales Landing Page</h1>
            <nav>
                <ul>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;