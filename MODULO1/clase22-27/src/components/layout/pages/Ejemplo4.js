import alumnos from '../../../data/alumnos.json'



const CargaJson = props => {
    return(
        <div>
        <h1>carga json</h1>
        <ul>
            {
                alumnos.map(alumno =>(
                    <li>{alumno.nombre} {alumno.apellido} - ({alumno.edad})</li>
                ))
            }
        </ul>
        
        </div>
    )
    }
    
    export default CargaJson;