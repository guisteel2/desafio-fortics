import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import About from '../about/about'
import Index from '../containers/container'

export default props => (
    <Router history={hashHistory}>
        <Route path='/container' component={Index} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/container' />
    </Router>
)