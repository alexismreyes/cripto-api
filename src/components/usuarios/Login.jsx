import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const submit = (e) => {
        e.preventDefault()
        console.log(user)
        axios.post(`https://reqres.in/api/login`,user)
        .then( data => {
            localStorage.setItem("tokenEDmarket",data.data.token)
            navigation("/")
            } )
        .catch(e=>console.error(e))
    }

    //si ya esta logeado no lo deje ir al login
    if(localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />

    return (
        <div className="login-container">        
        <h1>Iniciar Sesion</h1>
        <form onSubmit={ submit }>
            <div className="field">
                <label htmlFor="email">Correo electrónico</label>
                <input required type="email" id="email" name="email" onChange={ 
                    (e)=>{
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }
                 } />                
            </div>
            <div className="field">
                <label htmlFor="password">Contraseña</label>
                <input required type="password" id="password" name="password" onChange={ 
                    (e)=>{
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }
                 }/>
            </div>
            <div className="submit">
                <input type="submit" value="Ingresar" />
            </div>
        </form>
        </div>
    )

}

export default Login