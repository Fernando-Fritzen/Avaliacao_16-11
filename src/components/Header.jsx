import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../images/logo.png';
import Menu from './Menu';

import './Header.css';

function Header(){
    return(
        <header>

            <nav id="navbar">
                <div>
                    <Link to="/" title="Logo">
                        <img src={ Logo } alt="Logo"></img>
                    </Link>
                </div>
                
                <Menu />
            </nav>

        </header>
    );
}

export default Header;