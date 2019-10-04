import * as ActionTypes from './ActionTypes';

const initialState = {
    friends: []
};

export function friends(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.RECEIVE_FRIENDS:
            return {...state, isLoading: false, friends: action.friends};
        default:
            return state
    }
}
