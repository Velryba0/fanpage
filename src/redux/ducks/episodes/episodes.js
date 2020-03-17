export const REQUEST_EPISODES_DATA = 'REQUEST_EPISODES_DATA';
export const RECEIVE_EPISODES_DATA = 'RECEIVE_EPISODES_DATA';

export const requestEpisodesData = () => ({ type: REQUEST_EPISODES_DATA})
export const receiveEpisodesData = (data) => ({ type: RECEIVE_EPISODES_DATA, data});

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_EPISODES_DATA:
            return data;
        default:
            return state;
    }
}