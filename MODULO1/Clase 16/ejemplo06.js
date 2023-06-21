const cuadrado = document.getElementsByClassName('cuadrado')[0];
const rojo = document.getElementById('rojo');
const borde = document.getElementById('borde');
const reset = document.getElementById('reset');

rojo.addEventListener('click', function () {
    cuadrado.classList.add('rojo') //rojo color amarillo es nombre de la clase

})

borde.addEventListener('click', function(){
cuadrado.classList.add('borde') //rojo color amarillo es nombre de la clase

})

reset.addEventListener('click', function(){
    cuadrado.classList.remove('borde', 'rojo') //rojo color amarillo es nombre de la clase
})