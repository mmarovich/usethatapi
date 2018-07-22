import React, {Component} from 'react';

import ApiCard from './ApiCard';
import './ApiList.css';

class ApiList extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    listApis() {
        return this.props.apiList.map((api, i) => {
            return <ApiCard api={api} key={i} />
        })
    }

    render() {
        return(
            <div className="api-list">
                {this.listApis()}
            </div>
        )
    }
}

export default ApiList