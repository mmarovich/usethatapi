import * as actions from '../actions';

const initialState = {
    clipBoard: []
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.PASS_API_ROOT_DATA:
            return {
                ...state,
                clipBoard: state.clipBoard.concat(action.host),
                data: action.data
            }
            default:
                 return state;
    }
}