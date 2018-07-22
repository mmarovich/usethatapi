import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../Home';
import Header from '../Header';
import Api from '../Api';

class Routes extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/api" component={Api} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default Routes;