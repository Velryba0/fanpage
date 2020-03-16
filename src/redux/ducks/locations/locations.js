export const REQUEST_LOCATIONS_DATA = 'REQUEST_LOCATIONS_DATA';
export const RECEIVE_LOCATIONS_DATA = 'RECEIVE_LOCATIONS_DATA';

export const requesLocationsData = () => ({ type: REQUEST_LOCATIONS_DATA})
export const receiveLocationsData = (data) => ({ type: RECEIVE_LOCATIONS_DATA, data});

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_LOCATIONS_DATA:
            return data;
        default:
            return state;
    }
}