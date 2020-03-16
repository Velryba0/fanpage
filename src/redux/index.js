import { combineReducers } from 'redux';

import locations from './ducks/locations/locations';
import episodes from './ducks/episodes/episodes';
import characters from './ducks/character/characters';

export default combineReducers({
    locations,
    episodes,
    characters
});