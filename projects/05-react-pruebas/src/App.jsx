import './App.css'
import { ListOfMovies } from './Components/Movies.jsx'
import { useMovies } from './Hooks/useMovies.js'



function App() {

  
  const {movies} = useMovies()


  return (
    <div className='page'>

      <header>
        <h1>Movie Search</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, King Kong ...' />
          <button>Search</button>
        </form>
      </header>
      
      <main>
          <ListOfMovies movies={movies} />
      </main>
    
    </div>
  )
}

export default App
