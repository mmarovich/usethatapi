import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ClipBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            copied: false,
        };
    }

    render() {
        console.log(this.props)
        return (
            <div className="clipboard">
                <input value={"https://" + this.props.query.join("")} style={{ width: '500px' }}
                    onChange={({ target: { value } }) => this.setState({ value, copied: false })} />
                <CopyToClipboard text={"https://" + this.props.query.join("")}
                    onCopy={() => this.setState({ copied: true })}>
                    <button>Copy to clipboard with button</button>
                </CopyToClipboard>
                {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                <div className="copy-query"></div>
            </div>
        )
    }
}

export default ClipBoard;