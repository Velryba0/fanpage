import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requesLocationsData } from '../redux/ducks/locations/locations';
import { requestCharactersData } from '../redux/ducks/character/characters';
import { requestEpisodesData } from '../redux/ducks/episodes/episodes';

import CardChar from '../components/card/Card';

import './home.styles.css'

const Home = () => {

    const locationsData = useSelector(state => state.locations);
    const characterData = useSelector(state => state.characters);
    const episodesData = useSelector(state => state.episodes)
    const dispatch = useDispatch();

    // console.log('location', locationsData);
    console.log('characters',characterData);
    // console.log('episodes',episodesData);
    let val = typeof characterData.results === 'undefined' ? true : false;

    const Cards = Object.keys(!val ? characterData.results : []).map(key => (
        <CardChar 
        key={characterData.results[key].id}
        name={characterData.results[key].name}
        status={characterData.results[key].status}
        gender={characterData.results[key].gender}
        image={characterData.results[key].image}
        location={characterData.results[key].location.name}
        val={val}
        time={characterData.results[key].id}/>
    ))


    useEffect(() => {
        dispatch(requesLocationsData());
        dispatch(requestCharactersData());
        dispatch(requestEpisodesData())
    }, [])

    return (
        <div className='fanpage-home-container-cards'>
            {Cards}
        </div>
    )
}

export default Home;