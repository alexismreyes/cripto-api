import { Link } from "react-router-dom"
import "../assets/Home.css"

function Home(){
    return (
        <>
        <div className="home-container">
            <h1 className="title">Hola, bienvenido a MarketCap</h1>    
            <p className="subtitle">Informacion en tiempo real de las criptomonedas con mas valor en el mercado</p>
            <Link to="/criptomonedas" className="link">Ver Criptomonedas en Tiempo Real</Link>
        </div>
        </>
    )

}

export default Home