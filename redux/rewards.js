import * as ActionTypes from './ActionTypes';

/**
 *  Reducer function for managing the state of rewards data in the Redux store
 */

const initialState = {
    rewards: []
};

export function rewards(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.RECEIVE_REWARDS:
            return {...state, isLoading: false, rewards: action.rewards};
        default:
            return state
    }
}
