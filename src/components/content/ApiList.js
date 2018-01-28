import React, { Component } from 'react';

import apiData from '../apis/ApiData';
import Api from './Api';

class ApiList extends Component {
    render() {
        const apiList = apiData.map((item, index) => {
            return <Api data={item} key={index} />
        })
        return(
            <div className="apiList-container">
                {apiList}
            </div>
        )
    }
}

export default ApiList;