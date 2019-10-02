import getEnvVars from '../environment';
import {RECEIVE_REWARDS} from "./ActionTypes";

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
                console.log(err)
            });
    }
};
