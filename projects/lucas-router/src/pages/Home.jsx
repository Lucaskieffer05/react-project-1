import { navigate } from "../Link"

export default function HomePage(){
    return (
      <>
        <h1>Home Page</h1>
        <p>Este es el home Page</p>
        <button onClick={()=>navigate('/about')}>Saber sobre nosotros</button>    
      </>
    )
  }
  