import { combineReducers } from 'redux';

import locations from './ducks/locations/locations';
import episodes from './ducks/episodes/episodes';
import characters from './ducks/character/characters';
import searchCharacter from './ducks/character/searchCharacter';
import searchEpisodes from './ducks/episodes/searchEpisode';

export default combineReducers({
    locations,
    episodes,
    characters,
    searchCharacter,
    searchEpisodes
});