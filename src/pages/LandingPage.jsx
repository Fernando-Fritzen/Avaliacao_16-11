import React from 'react';

import '../styles/LandingPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


function LandingPage(){
    return(
        <div id="LandingPage">
            <Header />
            <div id="container">
                <div id="texto">
                    <h1>Restaurante Finanbib's</h1>
                    <h3>Coma os melhores lanches pelo melhor preço</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage