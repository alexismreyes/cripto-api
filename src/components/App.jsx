import Menu from "./menu/Menu"
import { Outlet } from "react-router-dom"

const App = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>

    )
}

export default App