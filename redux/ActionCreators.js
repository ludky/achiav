import getEnvVars from '../environment';
import {RECEIVE_REWARDS, RECEIVE_FRIENDS} from "./ActionTypes";
import { REWARDS } from '../shared/rewards';
import { FRIENDS } from '../shared/friends';

const { apiUrl } = getEnvVars();
const { apiKey } = getEnvVars();

function receiveRewards(json) {
    return {
        type: RECEIVE_REWARDS,
        rewards: json.rewards
    }
}
export const fetchRewards = () => {
    return dispatch => {
        return fetch(apiUrl, {    
            method: 'get',
            headers: new Headers({
                'x-api-key': apiKey
            })
            })
            .then(response => response.json())
            .then(json => dispatch(receiveRewards(json)))
            .catch(err => {
                console.log(err);
                return REWARDS;               
            })
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
