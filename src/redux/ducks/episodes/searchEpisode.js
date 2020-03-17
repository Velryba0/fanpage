export const REQUEST_SEARCH_EPISODES_DATA = 'REQUEST_SEARCH_EPISODES_DATA';
export const RECEIVE_SEARCH_EPISODES_DATA = 'RECEIVE_SEARCH_EPISODES_DATA';

export const requestSearchEpisodesData = (data) => ({ type: REQUEST_SEARCH_EPISODES_DATA, data})
export const receiveSearchEpisodesData = (data) => ({ type: RECEIVE_SEARCH_EPISODES_DATA, data});

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_SEARCH_EPISODES_DATA:
            return data;
        default:
            return state;
    }
}