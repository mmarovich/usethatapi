import * as actions from '../actions';

const initialState = {
    queryString: ""
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.PASS_API_DATA:
            return {
                ...state,
                data: action.data
            }
            default:
                 return state;
    }
}