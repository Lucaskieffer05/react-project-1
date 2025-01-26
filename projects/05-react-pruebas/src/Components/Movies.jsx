/* eslint-disable react/prop-types */

export function ListOfMovies ({ movies }){

    const hasMovies = movies && movies.length > 0

    return (
        (
            hasMovies ? (
                <ul>
                {
                    movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                    ))
                }
                </ul>
            ) : (
                <p>No movies found</p>
            )
        )
    )
}