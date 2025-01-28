import { useEffect, useRef } from 'react'
import './App.css'
import { ListOfMovies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useState } from 'react'


// --------------- FORMA CONTROLADA para verificaciones ---------------  

function useSearch(){
  const [error, setError ] = useState(null)
  const [search, updateSearch] = useState('')
  const isFirstInpu = useRef(true)

  useEffect(() => {
    if (isFirstInpu.current) {
      isFirstInpu.current = search === ''
      return
    }

    if (search == ''){
      setError('El campo no puede estar vacío')
      return
    }

    if (search.startsWith(' ')) { 
      setError('No se puede empezar con espacio')
      return
    }
    if (search.match(/[^a-zA-Z0-9\s]/)) {
      setError('No se pueden usar caracteres especiales')
      return
    }
    if (search.length < 3 && search.length > 0) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return {search, error, updateSearch}

}

function App() {

  
  const [sort, setSort] = useState(false)
  const {inputRef} = useRef()
  const {search, error, updateSearch} = useSearch()
  const {movies, getMovies, loading} = useMovies({search, sort})
  

  // Esta función del form se ejecuta con el evento submit, que es cuando se pulsa el botón de buscar
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    // Con esto, directamente NO DEJAMOS que se escriba un espacio al principio. PERO si lo quitamos, se podrá escribir pero salta el error por el useEffect
    if (newSearch.startsWith(' ')) return 
    updateSearch(newSearch)
  }

  /*
  // --------------- FORMA NO CONTROLADA para verificaciones ---------------  
  const [search, updateSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const { search } = Object.fromEntries(new FormData(event.target))
    console.log('Search:', search)
    if (search.startsWith(' ')) {
      setError(true)
      return
    }
    if (search.match(/[^a-zA-Z0-9\s]/)) {
      setError(true)
      return
    }
    setError(false)
  }
  */

  return (
    <div className='page'>

      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSubmit} >
          <input style={{
            border: error ? '1px solid red' : '1px solid transparent'
          }} name='search' onChange={handleChange} value={search} ref={inputRef} placeholder='Avengers, Star Wars, King Kong ...' />
          <button type='submit'>Search</button>
          <input type='checkbox' onChange={handleSort} checked = {sort} />
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      
      <main>
          {loading ? 
            <p>Loading...</p> 
            : <ListOfMovies movies={movies} />}
          
      </main>
    
    </div>
  )
}

export default App
