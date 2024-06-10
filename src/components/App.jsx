import Menu from "./menu/Menu"
import { Outlet } from "react-router-dom"
import "../assets/App.css"

const App = () => {
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