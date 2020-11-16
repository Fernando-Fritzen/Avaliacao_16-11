import React from 'react';

import './Footer.css';

import FacebookLogo from '../images/facebook.png';
import InstagramLogo from '../images/instagram.png';
import GithubLogo from '../images/github.png';
function Footer() {
  return(
      <footer>
          <ul className="footer">
            <li className="footer">fernandofritzen9@gmail.com</li>
            <li className="footer">josedacunha@gmail.com</li>
          </ul>

          <ul className="footer">
            <li className="footer">(45) 998337940</li>
            <li className="footer">(45) 998223852</li>
          </ul>

          <ul id="contato" className="footer">
            <li className="footer"><a href="https://www.facebook.com/fernandofritzen.pieske" target="_blank"><img src={ FacebookLogo }></img></a></li>
            <li className="footer"><a href="https://www.instagram.com/fernandofritzen9/?hl=pt-br" target="_blank"><img src={ InstagramLogo }></img></a></li>
            <li className="footer"><a href="https://github.com/Fernando-Fritzen" target="_blank"><img src={ GithubLogo }></img></a></li>
          </ul>
      </footer>
  );
}

export default Footer;