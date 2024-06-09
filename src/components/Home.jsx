import { Link } from "react-router-dom"

function Home(){
    return (
        <>
        <h1>Hola, bienvenido a MarketCap</h1>    
        <p>Informacion en tiempo real de las criptomonedas con mas valor en el mercado</p>
        <Link to="/criptomonedas">Ver Criptomonedas en Tiempo Real</Link>
        </>
    )

}

export default Home