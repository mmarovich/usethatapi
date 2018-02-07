import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './ApiCard.css';

import store from '../../store/store';

import * as actions from '../../actions';

class ApiCard extends Component {
    constructor(props) {
        super(props);

        this.transferData = this.transferData.bind(this);
    }


    transferData() {
        console.log("transferData working!");
        store.dispatch(actions.passApiData(this.props.data));
        return this.props.history.push('/api');
    }

    render() {
        return(
            <div className="apiCard-container">
                <div className="api">
                    <div className="api-link" onClick={this.transferData}>
                        <h1 style={{margin: '10px auto'}}>{this.props.data.name}</h1>
                        <p style={{margin: '10px auto'}}>{this.props.data.description}</p>
                    </div>
                    <a href={this.props.data.website}>Website</a>
                </div>
            </div>
        )
    }
}

export default withRouter(ApiCard);