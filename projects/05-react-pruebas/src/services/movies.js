const API_KEY = 'c452429e'

export async function searchMovies({search}) {

    if(search == '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const movies = json.Search
        const mapMovie = movies?.map(movie => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster  
        }))
        return mapMovie
    } catch (error) {
        throw new Error('Error al obtener las películas: ', error)
    }
}