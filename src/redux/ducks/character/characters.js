export const REQUEST_CHARACTERS_DATA = 'REQUEST_CHARACTERS_DATA';
export const RECEIVE_CHARACTERS_DATA = 'RECEIVE_CHARACTERS_DATA';

export const requestCharactersData = (data) => ({ type: REQUEST_CHARACTERS_DATA, data})
export const receiveCharactersData = (data) => ({ type: RECEIVE_CHARACTERS_DATA, data});

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_CHARACTERS_DATA:
            return data;
        default:
            return state;
    }
}