import { useState, useRef } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies({search, sort}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef()


    const getMovies = async () => {
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
    }

    const sortMovies = sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies



    return {movies : sortMovies, loading, getMovies}
  }
  