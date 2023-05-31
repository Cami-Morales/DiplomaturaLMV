const frutas = ['Manzana','Banana', 'Palta', 'Frutillas']
//siempre los arrays empiezan desde cero, en este ejemplo 0 sería manzana

console.log(frutas);
console.log(frutas.length); //cantidad

console.log(frutas[2]);

const ultimo = frutas[frutas.length-1]

console.log(ultimo) // frutillas

const seleccionado = 2;

console.log(frutas[seleccionado]); // que me va a decir?



for(let i= 0; i<frutas.length ; i++){
console.log('Tenemos ' + frutas[i])

}

for(let i= 0; i<frutas.length ; i++) {
    document.write('Tenemos ' + frutas[i] + "<br/>")
}



















//const meses = ['Enero', 'Febrero', 'Marzo'];

//const num = prompt('Ingrese su numero mes', ''); //1

//console.log(num-1)

//for(let i = 0;valor inicial; valor tope; incrementando){}