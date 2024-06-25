import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) =>{

    const [usuario,setUsuario] = useState({})
    useEffect(()=>{
        setUsuario({name: "Alexis Reyes", registeredSince: "06/Aug/24"})
    },[])


    return(
        <UserContext.Provider value={ usuario }>
            {children}
        </UserContext.Provider>

    )

}
export { UserContext, UserContextProvider }