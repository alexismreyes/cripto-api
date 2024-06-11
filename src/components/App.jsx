import Menu from "./menu/Menu"
import { Navigate, Outlet } from "react-router-dom"
import "../assets/App.css"

const App = () => {

    //si no esta logeado lleva al usuario al login
    if(!localStorage.getItem("tokenEDmarket")) return <Navigate to="/login" />

    return (
        <>
        <div className="app-container">
            <Menu />
            <Outlet />
        </div>
        </>

    )
}

export default App