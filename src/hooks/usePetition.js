import { useState, useEffect } from "react"
import axios from "axios"

const usePetition = (endpoint) =>{

    const [data,setData] = useState()
    const [loading,setLoading] = useState()

    const API_URL = import.meta.env.VITE_API_URL  

    useEffect( ()=>{

        setLoading(true)

        axios.get(`${API_URL}${endpoint}`)
        .then((data)=>{
            console.log("Data recovered",data.data.data);
            setData(data.data.data)
            setLoading(false)
        })
        .catch(
            ()=>{
            console.log("Something failed retrieving the data from the endpoint!!")
            setLoading(false)
            }
            //e => console.error(e) //no me funciono            
        )            

    },[])


    return [data,loading]
}

export default usePetition