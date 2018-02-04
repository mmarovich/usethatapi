import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './ApiCard.css';

class ApiCard extends Component {
    constructor(props) {
        super(props);

        this.manipulateQuerystring = this.manipulateQuerystring.bind(this);
    }


    manipulateQuerystring() {
        console.log("clicked")
        return this.props.history.push('/api');
    }

    render() {
        return(
            <div className="apiCard-container">
                <div className="api">
                    <div className="api-link" onClick={this.manipulateQuerystring}>
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