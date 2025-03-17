import { useEffect, useState } from "react"
import { Events } from "./consts"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"




function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(Events.PUSHSTATE, onLocationChange)
    window.addEventListener(Events.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(Events.PUSHSTATE, onLocationChange)
      window.removeEventListener(Events.POPSTATE, onLocationChange)
    }

  }, [])
  
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
