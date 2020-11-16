import React from 'react';

import { Link } from 'react-router-dom';

import './Menu.css';


function Menu(){
    return(
        <ul>
            <li className="header"><Link to="/bebidas"> Bebidas </Link></li>
            <li className="header"><Link to="/comidas"> Comidas </Link></li>
            <li className="header"><Link to="/sobre"> Sobre </Link></li>
            <li className="header"><Link to="/contato">Contato</Link></li>
        </ul>
    );
}

export default Menu;
