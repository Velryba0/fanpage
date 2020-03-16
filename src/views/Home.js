import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { requesLocationsData } from '../redux/ducks/locations/locations';
import { requestCharactersData } from '../redux/ducks/character/characters';
import { requestEpisodesData } from '../redux/ducks/episodes/episodes';

import CardChar from '../components/card/Card';
import Paginations from "../components/Paginations";

import './home.styles.css'

const Home = () => {

    const [totalPages, setTotalPages] = useState(1);
    const [pag, setPag] = useState(1);

    const locationsData = useSelector(state => state.locations);
    const characterData = useSelector(state => state.characters);
    const episodesData = useSelector(state => state.episodes)
    const dispatch = useDispatch();

    // console.log('location', locationsData);
    console.log('characters',characterData);
    // console.log('episodes',episodesData);
    let day = moment()
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
        time={characterData.results[key].id}
        created={characterData.results[key].created}/>
    ));


    useEffect(() => {
        dispatch(requesLocationsData('prueba'));
        dispatch(requestCharactersData(pag));
        dispatch(requestEpisodesData());
        setTotalPages(!val ? characterData.info.pages : 0);
        console.log(pag)
    }, [val, pag])

    return (
        <>
        <div className='fanpage-home-container-cards'>
            {Cards}
        </div>
        {!val ? <Paginations count={!val ? totalPages : 1} setPag={setPag}/> : <div>Loading...</div>}
        </>
    )
}

export default Home;