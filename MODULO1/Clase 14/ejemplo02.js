const nombre = prompt('Ingrese su nombre', '');
const nota = parseInt(prompt('Ingrese su nota', ''));

if(Number.isNaN(nota)){
    document.write('la nota ingresada no es válida')
} else if( nota >= 4){
    document.write(`${nombre} está aprobado con la nota ${nota}`)
} else {
    document.write(`${nombre} está desaprobado con la nota ${nota}`)
}

//NaN en JavaScript es un valor que representa la ausencia de un valor numérico. Esto queda claro con sus siglas, que son una abreviación de la sentencia not a number. Dentro de la categoría que representa la ausencia de valor, también se encuentran los elementos null y undefined.