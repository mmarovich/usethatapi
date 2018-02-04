import * as actions from '../actions';

const initialState = {
    queryString: ""
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TO_QUERYSTRING:
            return {
                ...state,
                queryString: "https://whatupbruh"
            }
            default:
                 return state;
    }
}