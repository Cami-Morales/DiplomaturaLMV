import { EjemploProps01, EjemploProps02, EjemploProps03, EjemploProps04, EjemploProps05 } from "../../Props";

const name = 'Pablo'

const lista =['manzanas', 'bananas', 'peras', 'paltas']

const mostrarValor = valor =>{
    console.log(valor)
}


const Ejemplo1 = (props) => {
    return(
        <div>
        <h1>Ejemplos de propiedades</h1>
        {/* propiedad simple y reutilizable */}
        <EjemploProps01 nombre='Camila' />
        <EjemploProps01 nombre={name} />
        {/* listado de elementos */}
        <EjemploProps02 elementos={lista} />
        {/* multiples propiedades y destructuring */}
        <EjemploProps03 titulo='noticia x' subtitulo='aca estamos aprendiendo react' cuerpo='soy el cuerpo de la noticia' />
        {/* Evento - al tener Cambiar Valor funciona*/}
        <EjemploProps04 cambiarValor={mostrarValor} />
        {/* Evento - tenemos con if que controla antes */}
        <EjemploProps05 eventoClick={mostrarValor}/> 

        </div>
    )
}


export default Ejemplo1;