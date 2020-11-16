import React from 'react';
import LandingPage from './pages/LandingPage';
import Paginas from './pages/Paginas';

import { Switch, Route } from 'react-router-dom';

function Routes(){
    return(
        <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/comidas" component={Paginas} />
            <Route path="/bebidas" component={Paginas} />
            <Route path="/sobre" component={Paginas} />
            <Route path="/contato" component={Paginas} />

        </Switch>
    );
}

export default Routes;