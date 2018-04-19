import React, { Component, Fragment } from 'react';

import './Option.css';

class Option extends Component {
    constructor(props) {
        super(props);

        this.chooseOption = this.chooseOption.bind(this);
    }

    chooseOption(e) {
        console.log(e.target.checked);
        const pathValue = e.target.value;
        store.dispatch(actions.passApiPath(pathValue));        
    }

    render() {
        return(
            <Fragment>
                <input
                    className="option-button"
                    name="option"
                    id={this.props.path.option}
                    type="radio" 
                    value={this.props.path.path}
                    onChange={(e) => this.chooseOption(e)}
                />
                <label 
                    htmlFor={this.props.path.option}
                    style={styles.notChosen}
                >{this.props.path.option}</label>
            </Fragment>
        )
    }
}

const styles = {
    notChosen: {
        margin: "10px",
        display: "inline-block"
    },
    chosen: {
        margin: "10px",
        display: "inline-block",
        backgroundColor: "black",
        color: "white"
    }
}

export default Option;