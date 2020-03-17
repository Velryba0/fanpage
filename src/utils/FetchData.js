const FetchData = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/location');
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export const fetchEpisodes = async (data) => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export const fetchCharacters = async (pag) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pag.data}`);
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export const fetchSearchCharacter = async (name) => {
    console.log(name)
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${name.page}&name=${name.data}`);
        const data = await response.json()
        return data
    } catch (error) {
        document.location.reload();
        console.log(error);
    }
}

export const fetchSearchEpisode = async (name) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/?name=${name.data}`);
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export const fetchSearch = async (category, value) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${category}&status=${value}`);
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}


export default FetchData;