import { useParams } from "react-router-dom"

const CriptoPage = () => {

    const params = useParams()

    return(
        <h1>Soy la criptomoneda {params.cryptoid}</h1>
    )
}

export default CriptoPage