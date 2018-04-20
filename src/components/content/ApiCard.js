import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

import './ApiCard.css';

class ApiCard extends Component {
    constructor(props) {
        super(props);
    }

    renderApi() {

    }

    render() {
        console.log(this.props)
        return (
            <div className="apiCard-container">
                <div className="api">
                    <Link to={{pathname: "/api", data: this.props.data}} >
                        <h1 style={{ margin: '10px auto' }}>{this.props.data.name}</h1>
                        <p style={{ margin: '10px auto' }}>{this.props.data.description}</p>
                    </Link>
                    <a href={this.props.data.website}>Website</a>
                </div>
            </div>
        )
    }
}

export default withRouter(ApiCard);