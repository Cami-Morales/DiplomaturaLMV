import { useState } from "react";

const EjemploEstado01 = props => {

    const [activo, setActivo] = useState(true);

    const toggleActivo = e => {
        setActivo(!activo); //negación booleano -> setea el activo al contrario de lo que este Activo
    }

    return (
        <div>

            <input type="text" placeholder="escribime" disabled=
                {!activo} />{/* disabled > desabilitado */}
            <button onClick={toggleActivo}>{activo ? 'Desactivar' : 'Activar'}</button>
            {/* operador ternario que ve que pasa con la variable activo */}
        </div>
    )

}

const EjemploEstado02 = props => {

    const [counter, setCounter] = useState(0);

    return(
        <div className="container">
            <div className="counter">
                <h3>{`Contador: ${counter}`}</h3>
            </div>
            <div className="button">
                <button className="sucess" onClick={() => setCounter(counter + 1)}> + </button>
                <button className="error" onClick={() => setCounter(counter - 1)}> - </button>
            </div>
        </div>
    )
}

export {
    EjemploEstado01,
    EjemploEstado02
}

