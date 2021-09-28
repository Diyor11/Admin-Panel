import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Customer from './Customer/Customer';

import Dashboard from './Dashboard/Dashboard';
import Order from './Order/Order';
import Products from './Products/Products';
import Setting from './Settings/Setting';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='/customers' component={Customer} />
            <Route path='/products' component={Products} />
            <Route path='/orders' component={Order} />
            <Route path='/settings' component={Setting} />
        </Switch>
    )
}

export default Routes
