import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import FAQList from './FAQList';
import LauncherList from "./LauncherList"
import LauncherShow from "./LauncherShow"

const App = props => {
   
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={FAQList}/>
                <Route exact path="/launchers" component={LauncherList}/>
                <Route exact path="/launchers/:id" component={LauncherShow}/>
            </BrowserRouter>
        </div>
    )
}

export default App;
