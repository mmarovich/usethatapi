import React, {Component} from 'react';

import ApiList from '../ApiList';
import apis from '../apis';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: [],
            apiList: []
        }
    }

    componentWillMount() {
        this.setState({
            apiList: apis
        })
    }

    render() {
        return(
            <div>
                <ApiList apiList={this.state.apiList} />
            </div>
        )
    }
}

export default Home;