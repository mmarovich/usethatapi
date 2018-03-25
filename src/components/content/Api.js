import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClipBoard from './ClipBoard';
import Option from './Option';

class Api extends Component {

    render() {
        console.log(this.props.api);
        console.log(this.props.apiPaths);

        const generateOptions = this.props.apiPaths.map((path, index) => {
            return <Option path={path} key={index} />
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
    apiPaths: state.register.data.paths
})

export default connect(mapStateToProps)(Api);