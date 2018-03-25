import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import store from '../../store/store';
import * as actions from '../../actions';

class Option extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosen: false,
            pathValue: ''
        }

        this.chooseOption = this.chooseOption.bind(this);
    }

    chooseOption(e) {
        const pathValue = e.target.value;
        if (!this.state.chosen) {
            this.setState({chosen: true})
            store.dispatch(actions.passApiPath(pathValue));
        } else {
            this.setState({chosen: false})
        }
        
    }

    render() {
        return(
            <Fragment>
                <button
                    className="option-button"
                    style={styles.optionButton} 
                    type="button" 
                    value={this.props.path.path}
                    onClick={(e) => this.chooseOption(e)}>
                        {this.props.path.option}
                </button>
            </Fragment>
        )
    }
}

const styles = {
    notChosen: {
        margin: "10px",
        display: "inline-block"
    },
    Chosen: {
        margin: "10px",
        display: "inline-block",
        backgroundColor: "black",
        color: "white"
    }
}

const mapStateToProps = (state) => ({
    apiPaths: state.register.data.paths
})

export default connect(mapStateToProps)(Option);