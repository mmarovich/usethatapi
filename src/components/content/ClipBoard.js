import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connect } from 'react-redux';

class ClipBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            copied: false,
        };
    }

    render() {
        return (
            <div className="clipboard">
                <input value={"https://" + this.props.clipBoard} style={{ width: '500px' }}
                    onChange={({ target: { value } }) => this.setState({ value, copied: false })} />
                <CopyToClipboard text={"https://" + this.props.clipBoard}
                    onCopy={() => this.setState({ copied: true })}>
                    <button>Copy to clipboard with button</button>
                </CopyToClipboard>
                {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                <div className="copy-query"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    clipBoard: state.register.clipBoard,
    api: state.register.data
})

export default connect(mapStateToProps)(ClipBoard);