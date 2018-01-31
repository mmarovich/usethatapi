import * as actions from '../actions';

const initialState = {
    test: 0
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TEST:
            return {
                ...state,
                test: "hello"
            }
            default:
                 return state;
    }
}