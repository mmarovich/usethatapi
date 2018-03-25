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
        case actions.PASS_API_PATH:
            return {
                ...state,
                clipBoard: [
                    ...state.clipBoard.slice(0, 1),
                    action.path
                ]
            }
            default:
                 return state;
    }
}