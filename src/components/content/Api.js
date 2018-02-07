import React, { Component } from 'react';


import { connect } from 'react-redux';

class Api extends Component {
    render() {

        const generateOptions = this.props.apiPaths.map((path, index) => {
            return (<div><label>{path.option}</label>
                <input type="radio" name="api-option" value={path.option}/></div>)
        });
        return (
            <div className="api-container">
                <div className="copy-query"></div>
                <form>
                    {generateOptions}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    apiPaths: state.register.data.paths
})

export default connect(mapStateToProps)(Api);