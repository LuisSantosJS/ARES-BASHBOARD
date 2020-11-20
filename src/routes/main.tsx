import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Bashboard from '../pages/Bashboard';
const RouterMain: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Login} />
            <Route path='/bashboard' exact component={Bashboard} />
        </BrowserRouter>
    );
}

export default RouterMain;