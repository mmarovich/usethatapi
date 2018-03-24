import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClipBoard from './ClipBoard.js';

class Api extends Component {

    render() {
        console.log(this.props.api);
        console.log(this.props.apiPaths);

        const generateOptions = this.props.apiPaths.map((path, index) => {
            return (<div key={index}><label>{path.option}</label>
                <input type="radio" name="api-option" value={path.option} /></div>)
        });
        return (
            <div className="api-container">
                <ClipBoard />
                <form>
                    {generateOptions}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    apiPaths: state.register.data.paths,
    api: state.register.data
})

export default connect(mapStateToProps)(Api);