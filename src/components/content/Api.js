import React, { Component } from 'react';

import ClipBoard from './ClipBoard';

class Api extends Component {

    handleQuery(e) {
        e.preventDefault()
        console.log("Hello")
    }

    render() {
        console.log(this.props)
        return (
            <div className="api-container">
                <ClipBoard />
                <form className="form">
                    <button onClick={this.handleQuery}>Next</button>
                </form>
            </div>
        )
    }
}

export default Api;