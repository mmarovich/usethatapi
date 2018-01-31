import { createStore } from 'redux'

import { testReducer } from '../reducers/index';

let store = createStore(testReducer);

export default store;