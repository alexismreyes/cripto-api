import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()
  
  //basic fetch way
  /* useEffect(()=>{
    //fetch("https://api.coincap.io/v2/assets")
    fetch(`${API_URL}assets`)       
    .then((resp) => resp.json())
    .then((data)=>{
      //console.log(data);
      setCriptos(data.data)
    })
    .catch(()=>{
      console.error("La petición falló");
    })
  },[]) */

//Async/Await using fetch
/*   useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch("https://api.coincap.io/v2/assets");
        const url = `${import.meta.env.VITE_API_URL}assets`;
        const response = await fetch(url);
        const data = await response.json();
        setCriptos(data.data);
      } catch (error) {
        console.error("La petición falló", error);
      }
    };

    fetchData();
  }, []); */


  //axios way

  useEffect(()=>{    
    axios.get(`${API_URL}assets`)
    .then((data)=>{
      //console.log(data);
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.error("La petición falló");
    })
  },[])


  

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>LISTA DE CRIPTOMONEDAS</h1>
      <ul>
        {/* { criptos.map( cripto => (
          <li>Nombre: { cripto.name } - Precio: { cripto.priceUsd }</li>
        ) ) } */}

        { criptos.map( ({ id, name, priceUsd }) => (
          <li key={id}> Nombre: { name } - Precio: { priceUsd }</li>
        ) ) }

      </ul>
      
    </>
  )
}

export default App
