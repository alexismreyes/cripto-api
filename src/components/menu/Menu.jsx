import "./Menu.css"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"


function Menu(){    

    const usuario = useContext(UserContext)
    const navigation = useNavigate()

    return(
        <nav className="main-menu">
            <ul>
                {/* <a href="/">Inicio</a>
                <a href="/saludo">Saludo</a>   */}   

                {/* <li><Link to="/">Inicio</Link></li>           
                <li><Link to="/saludo">Saludo</Link></li>   */}  

                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li> 
                <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li> 
                <li><a onClick={()=>{
                    localStorage.removeItem("tokenEDmarket")
                    navigation("/login")
                }}>Cerrar Sesion</a></li> 

                

            </ul>
        </nav>
    )

}

export default Menu