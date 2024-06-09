import "./Cripto.css"

const Cripto = ({ name, priceUsd, symbol, cambio }) => {
    return (
        <div className="cripto">
            <h2>{ name }</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{ parseFloat(priceUsd).toFixed(4) }</p>
                <p><span className="label">Código: </span>{ symbol }</p>
                <p>
                <span className="label">Cambio 24hrs: </span>
                <span className={ parseFloat(cambio).toFixed(3) > 0 ? "positivo" : "negativo" }>{ parseFloat(cambio).toFixed(3)  }%</span>
                </p>
            </div>
        </div>
    )
}

export default Cripto