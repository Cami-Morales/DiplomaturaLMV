const numeros = [1,2,3,4,5,6,7,8,9,10]
const pares = numeros.filter(num => num %2 == 0);

//% > el operador resto (%) devuelve el resto de la división entre 2 números.
// sabes que los números pares 2,4,6,8,10 > dan resto 0
// => funcion de flecha o arrow
// === es en tipo y valor


//Las funciones de flecha, o arrow functions son una nueva forma de definir funciones y hay distintas variantes en la sintaxis: Función de un solo parámetro. Al crear una arrow function de un solo parámetro no es necesario escribir los paréntesis, tampoco es necesario escribir las llaves.

console.log(numeros); //todos
console.log(pares); //2, 4, 6, 8, 10