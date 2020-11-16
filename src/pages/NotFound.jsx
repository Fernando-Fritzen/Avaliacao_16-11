import React from 'react';

import '../styles/NotFound.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  return (
      <div id="NotFound">
          <Header />
          <div id="mensagemErro">
            <h1>Essa página não existe</h1>
          </div>
          <Footer />
      </div>
  );
}

export default NotFound;