import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { connect } from 'react-redux';

class Api extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            copied: false,
        };
    }
    render() {

        const generateOptions = this.props.apiPaths.map((path, index) => {
            return (<div key={index}><label>{path.option}</label>
                <input type="radio" name="api-option" value={path.option}/></div>)
        });
        return (
            <div className="api-container">
                <input value={this.state.value} style={{width: '500px'}}
                    onChange={({target: {value}}) => this.setState({value, copied: false})} />
                <CopyToClipboard text={this.state.value}
                    onCopy={() => this.setState({copied: true})}>
                    <button>Copy to clipboard with button</button>
                </CopyToClipboard>
                {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
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