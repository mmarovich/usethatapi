import React, { Component } from 'react';
import { Router, withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ApiList from '../content/ApiList';
import Api from '../content/Api';

import history from '../../store/store';

const ConnectedSwitch = connect(state => ({
    location: state.router
  }))(Switch)

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact component={ApiList} />
                <Route path="/api" exact component={Api} />
            </Switch>
        )
    }
}

export default withRouter(Routes);