import getEnvVars from '../environment.js';
import {RECEIVE_REWARDS, RECEIVE_FRIENDS} from "./ActionTypes";
import { FRIENDS } from '../shared/friends';

/**
 * This class contains all Redux actions that occur as a result of  
 */

const { apiUrl } = getEnvVars();
const { apiKey } = getEnvVars();

function receiveRewards(json) {
    return {
        type: RECEIVE_REWARDS,
        rewards: json.rewards
    }
}
export const fetchRewards = () => {
    return async dispatch => {
        try {
            const response = await fetch(apiUrl, {
                method: 'get',
                headers: new Headers({
                    'x-api-key': apiKey
                })
            });
            const json = await response.json();
            return dispatch(receiveRewards(json));
        }
        catch (err) {
            console.log(err);
        }
    }
};

function receiveFriends(json) {
    return {
        type: RECEIVE_FRIENDS,
        friends: json.friends
    };
}

export const fetchFriends = () => {
    return dispatch => {
        dispatch(receiveFriends(FRIENDS));
    };
}
