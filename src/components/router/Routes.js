import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Api from '../content/Api';
import ApiList from '../content/ApiList'

class Routes extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ApiList} />
                    <Route path="/api" exact component={Api}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;