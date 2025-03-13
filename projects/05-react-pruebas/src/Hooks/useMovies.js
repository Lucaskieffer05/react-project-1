import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies({search, sort}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef()

    // El useCallBack se usa para las funciones pero hace lo mismo que el useMemo
    // Esta funcion se genera solo la primera vez y con el search por parametro, por lo que no se va a ejecutar cada vez que se renderice el componente
    const getMovies = useCallback(async ({search}) => {
      console.log('new getMovies')
      if (search == previousSearch.current) return

      try {
        setLoading(true)
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
        setLoading(false)
      } catch (error) {
        setError(error.message)
      }finally{
        setLoading(false)
      }
    }, [])


    /* Esto se va a ejecutar cada vez que se renderice el componente ( por lo tanto, cada vez que cambie search) (por eso se usa useMemo linea 38)
    const getSortedMovies = () => {
      return sort ? 
        [...movies].sort((a,b) => a.title.localeCompare(b.title)) 
        : movies
    }
    */

    const getSortedMovies = useMemo(() => {
      return sort ? 
        [...movies].sort((a,b) => a.title.localeCompare(b.title)) 
        : movies
    }, [movies, sort])

    return {movies : getSortedMovies, loading, getMovies}
  }
  