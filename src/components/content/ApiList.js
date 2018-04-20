import React, { Component } from 'react';

import ApiCard from './ApiCard';

import ApiData from '../apis';

class ApiList extends Component {
    constructor(props) {
        super (props);

        this.state = {
            apiList: []
        }
    }

    componentWillMount() {
        this.setState({apiList: ApiData});
    }

    mapApis() {
        const mappedApis = this.state.apiList.map((api, i) => {
            return <ApiCard data={api} key={i} />
        })

        return mappedApis;
    }

    render() {
        return (
            <div className="apiList-container">
                {this.mapApis()}
            </div>
        )
    }
}

export default ApiList;