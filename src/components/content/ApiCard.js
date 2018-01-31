import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './ApiCard.css';

class ApiCard extends Component {
    render() {
        return(
            <div className="apiCard-container">
                <div className="api">
                    <Link to="/api">
                        <h1 style={{margin: '10px auto'}}>{this.props.data.name}</h1>
                        <p style={{margin: '10px auto'}}>{this.props.data.description}</p>
                    </Link>
                    <a href={this.props.data.website}>Website</a>
                </div>
            </div>
        )
    }
}

export default ApiCard;