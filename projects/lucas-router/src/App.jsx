import { useEffect, useState } from "react"

const NAVIGATION_EVENT = 'pushstate'

function navigate (href){
  window.history.pushState({}, null, href)
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage(){
  return (
    <>
      <h1>Home Page</h1>
      <p>Este es el home Page</p>
      <a href="/about">Saber sobre nosotros</a>    
    </>
  )
}

function AboutPage(){
  return (
    <>
      <h1>About Page</h1>
      <p>Este es el about page y creando un clon de react roter</p>
      <div>
        <img src="https://media.istockphoto.com/id/1428205626/es/vector/ilustraci%C3%B3n-de-dise%C3%B1o-vectorial-de-monograma-lk.jpg?s=612x612&w=0&k=20&c=suFnqLcc_qqBt4WPkN3jd1KP19EEAYbC8pbpbrE-RoI=" 
          alt="logo" />
      </div>
      <a href="/">Ir a home </a>    
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }

  }, [])
  
  return (
    <main>
      <HomePage />
      <AboutPage />
    </main>
  )
}

export default App
