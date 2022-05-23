export default async function searchMovie(searchedText) {
    const apiLink = `http://www.omdbapi.com/?apikey=92e7a656&s="${searchedText}"`

    let response = await fetch(apiLink, {
        method: 'get',
    })

    let result = await response.json()

    return result;
}