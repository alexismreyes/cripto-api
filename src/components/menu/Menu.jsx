import "./Menu.css"
import { Link, NavLink } from "react-router-dom"

function Menu(){

    return(
        <nav className="main-menu">
            <ul>
                {/* <a href="/">Inicio</a>
                <a href="/saludo">Saludo</a>   */}   

                {/* <li><Link to="/">Inicio</Link></li>           
                <li><Link to="/saludo">Saludo</Link></li>   */}  

                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>            
                

            </ul>
        </nav>
    )

}

export default Menu