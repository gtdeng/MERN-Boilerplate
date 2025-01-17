import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hello from '../components/Hello';

const AppSwitch = () => (
    <Switch>
        <Route path='/' component={ Hello } exact />
    </Switch>
);

export default AppSwitch;
