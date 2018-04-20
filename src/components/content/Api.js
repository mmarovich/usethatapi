import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons'

import ClipBoard from './ClipBoard';
import Option from './Option'

class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: []
        }
    }

    componentDidMount() {
        if (this.state.query.length === 0) {
            this.setState({ query: [...this.state.query, this.props.location.data.host]})
        }
    }

    buildQuery(param) {
        console.log(param)
    }

    onChange(e) {
        console.log(e);
    }

    render() {
        const pathOptions = this.props.location.data.paths.map((option, i) => {
            return <RadioButton value={option} key={i} />
        })
        console.log(this.props.location.data)
        return (
            <div className="api-container">
                <ClipBoard query={this.state.query} />
                <RadioGroup onChange={ this.onChange } horizontal>
                    {pathOptions}
                    <button >Next</button>
                </RadioGroup>
            </div>
        )
    }
}

export default Api;