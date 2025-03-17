import { navigate } from "../Link"

export default function AboutPage(){
  return (
    <>
      <h1>About Page</h1>
      <p>Este es el about page y creando un clon de react roter</p>
      <div>
        <img src="https://media.istockphoto.com/id/1428205626/es/vector/ilustraci%C3%B3n-de-dise%C3%B1o-vectorial-de-monograma-lk.jpg?s=612x612&w=0&k=20&c=suFnqLcc_qqBt4WPkN3jd1KP19EEAYbC8pbpbrE-RoI=" 
          alt="logo" />
      </div>
      <button onClick={()=>navigate('/')}>Ir a home </button>    
    </>
  )
}