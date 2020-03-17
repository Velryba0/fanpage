import { all, call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_LOCATIONS_DATA, receiveLocationsData} from '../ducks/locations/locations';
import { REQUEST_EPISODES_DATA, receiveEpisodesData } from '../ducks/episodes/episodes';
import { REQUEST_CHARACTERS_DATA, receiveCharactersData } from '../ducks/character/characters';
import { REQUEST_SEARCH_CHARACTER_DATA, receiveSearchCharactersData } from '../ducks/character/searchCharacter';
import { REQUEST_SEARCH_EPISODES_DATA, receiveSearchEpisodesData } from '../ducks/episodes/searchEpisode';
import FetchData, { fetchEpisodes, fetchCharacters, fetchSearchCharacter, fetchSearchEpisode } from '../../utils/FetchData';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getData(action) {
   try {
      const locations = yield call(FetchData);
      yield put(receiveLocationsData(locations));
   } catch (e) {
      console.log(e)
   }
}

function* getEpisodes(action) {
    try {
       const episodes = yield call(fetchEpisodes, action);
       yield put(receiveEpisodesData(episodes));
    } catch (e) {
       console.log(e)
    }
 }

 function* getCharacters(action) {
    try {
       const characters = yield call(fetchCharacters, action);
       yield put(receiveCharactersData(characters));
    } catch (e) {
       console.log(e)
    }
 }

 function* getSearchCharacters(action) {
    console.log(action)
   try {
      const searchCharacters = yield call(fetchSearchCharacter, action);
      yield put(receiveSearchCharactersData(searchCharacters));
   } catch (e) {
      console.log(e)
   }
}

function* getSearchEpisodes(action) {
   try {
      const searchEpisodes = yield call(fetchSearchEpisode, action);
      yield put(receiveSearchEpisodesData(searchEpisodes));
   } catch (e) {
      console.log(e)
   }
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield all([
    takeLatest(REQUEST_LOCATIONS_DATA, getData),
    takeLatest(REQUEST_EPISODES_DATA, getEpisodes),
    takeLatest(REQUEST_CHARACTERS_DATA, getCharacters),
    takeLatest(REQUEST_SEARCH_CHARACTER_DATA, getSearchCharacters),
    takeLatest(REQUEST_SEARCH_EPISODES_DATA, getSearchEpisodes)
  ]);
}

export default mySaga;