import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCharactersData } from '../redux/ducks/character/characters';
import { requestSearchCharactersData } from '../redux/ducks/character/searchCharacter';

import CardChar from '../components/card/Card';
import Paginations from "../components/Paginations";

import './home.styles.scss';

const Home = () => {

    const [totalPages, setTotalPages] = useState(1);
    const [pag, setPag] = useState(1);

    const searchData = useSelector(state => state.searchCharacter);
    const characterData = useSelector(state => state.characters);
    const dispatch = useDispatch();

    let regex = /name=(.*)/
    let val = typeof characterData.results === 'undefined' ? true : false;
    let searchVal = Object.entries(searchData).length > 0 ? false : true;
    let nextVal = Object.entries(!searchVal ? (searchData.info) ? searchData.info.next : document.location.reload() : '').length > 0 ? true : false;
    let prevVal = Object.entries(!searchVal ? searchData.info.prev : '').length > 0 ? true : false;

    let rex = nextVal ? (searchData.info.next.match(regex)) ? searchData.info.next.match(regex).slice(1) : 'prueba' : '';
    let rexPrev = prevVal ? (searchData.info.prev.match(regex)) ? searchData.info.prev.match(regex).slice(1) : 'prueba' : '';

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
        created={characterData.results[key].created}
        origin={characterData.results[key].origin.name}
        species={characterData.results[key].species}/>
    ));

    const searchCards = Object.keys(!searchVal ? searchData.results : []).map(key => (
        <CardChar 
        key={searchData.results[key].id}
        name={searchData.results[key].name}
        status={searchData.results[key].status}
        gender={searchData.results[key].gender}
        image={searchData.results[key].image}
        location={searchData.results[key].location.name}
        val={searchVal}
        time={searchData.results[key].id}
        created={searchData.results[key].created}
        origin={searchData.results[key].origin.name}
        species={searchData.results[key].species}/>
    ));


    useEffect(() => {
        if(searchVal) {
            dispatch(requestCharactersData(pag));
            setTotalPages(!val ? characterData.info.pages : 0);
        } else {
            dispatch(requestSearchCharactersData(nextVal ? rex[0] : rexPrev[0], pag));
            setTotalPages(!searchVal ? searchData.info.pages : 0)
        }
    }, [])

    return (
        <>
        <div className='fanpage-home-container-cards'>
            {!searchVal ? searchCards : Cards}
        </div>
        {!val ? <Paginations count={!val ? totalPages : 1} setPag={setPag}/> : <div>Loading...</div>}
        </>
    )
}

export default Home;