import React, { Component } from 'react';

import './Api.css';

class Api extends Component {
    render() {
        return(
            <div className="api-container">
                <div className="api">
                    <h1 style={{margin: '10px auto'}}>{this.props.data.name}</h1>
                    <a href={this.props.data.website}>Website</a>
                    <p style={{margin: '10px auto'}}>{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}

export default Api;