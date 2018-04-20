import React, { Component, Fragment } from 'react';
import { RadioButton } from 'react-radio-buttons'

import './Option.css';

class Option extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return(
            <RadioButton value="Apple" key={this.props.key}>
                Apple
            </RadioButton>
        )
    }
}

export default Option;