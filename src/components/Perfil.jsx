import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Perfil(){

    const usuario = useContext(UserContext)

    return (
    <>
        <h1>Perfil de { usuario.name }</h1>
        <h3>Usuario desde: 06/10/24</h3>
    </>        
    )
}

export default Perfil