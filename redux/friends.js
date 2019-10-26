import * as ActionTypes from './ActionTypes';

/**
 *  Reducer function for managing the state of friends data in the Redux store.  This function takes in the current state and which actionw as performed
 *  and then returns the new state of the Redux store.
 */

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
