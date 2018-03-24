import React, { Component } from 'react';

import apiData from '../apis/ApiData';
import ApiCard from './ApiCard';


class ApiList extends Component {
    render() {
        const apiList = apiData.map((item, index) => {
            return <ApiCard data={item} key={index} />
        })
        return(
            <div className="apiList-container">
                {apiList}
            </div>
        )
    }
}

export default ApiList;