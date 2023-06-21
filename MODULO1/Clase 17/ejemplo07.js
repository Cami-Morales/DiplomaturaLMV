const frutas = ['palta', 'manzana', 'bananas', 'frutillas'];

console.log(frutas)
//document.write(frutas + "<br>")

console.log(frutas.sort());

const frutasOrdenadas = frutas.sort();

console.log(frutasOrdenadas)

//document.write(frutasOrdenadas)

const numeros = [78, 10, 2, 7, 223, 1, 5, 213];

//const edad = prompt('ingrese su edad', '');
console.log(numeros.sort())

const num = numeros.sort(function(a,b){
    return a-b
})

console.log(num)

// de mayor a menor
const num2 = numeros.sort(function (a, b) {
    return b - a 
})

console.log(num2)

const nombres = ['Flavia', 'Leonardo', 'Camila', 'Rodolfo', 'Daniela', 'Ramiro'] ;

//ordenados de a-z

const nombresOrdenados = nombres.sort();
console.log(nombresOrdenados);

//ordenados z-a

const nombresOrdenados2 = nombres.sort().reverse();

console.log(nombresOrdenados2);