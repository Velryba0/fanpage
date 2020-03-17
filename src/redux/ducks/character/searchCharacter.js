export const REQUEST_SEARCH_CHARACTER_DATA = 'REQUEST_SEARCH_CHARACTER_DATA';
export const RECEIVE_SEARCH_CHARACTER_DATA = 'RECEIVE_SEARCH_CHARACTER_DATA';

export const requestSearchCharactersData = (data, page) => ({ type: REQUEST_SEARCH_CHARACTER_DATA, data, page})
export const receiveSearchCharactersData = (data) => ({ type: RECEIVE_SEARCH_CHARACTER_DATA, data});

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_SEARCH_CHARACTER_DATA:
            return data;
        default:
            return state;
    }
}