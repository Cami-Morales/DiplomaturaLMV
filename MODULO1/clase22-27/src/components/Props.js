const EjemploProps01 = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}


const EjemploProps02 = props => {

    const { elementos } = props;

    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}> {elemento} </li>)}
        </ul>
    )


}

const EjemploProps03 = ({titulo,subtitulo,cuerpo}) => {
    return(
        <div>
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}

const EjemploProps04 = props =>{
    // cuando haga el evento onChange del input
    // va a ejecutar la función anónima
    // que lo que hace es cambiarValor (recibimos de la propiedad)> mostrando las letras
    //cambiarValor > va a estar creado en Ejemplo1
    return(
        <label>ver en consola: 
            <input type="text" onChange={(e) => 
            props.cambiarVarlor(e.target.value)
        } /></label>
    )
}

const EjemploProps05 = props =>{

    const handerClick= e =>{
        if(props.eventoClick){
            props.eventoClick('me cliqueaste')
        }
    }

    return(
        <p><button onClick={handerClick}>Cliqueame!</button></p>
    )
}


export {
    EjemploProps01,
    EjemploProps02,
    EjemploProps03,
    EjemploProps04,
    EjemploProps05
}