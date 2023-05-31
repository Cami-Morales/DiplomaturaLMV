const alternar = document.getElementsByClassName('alternar')[0];

//console.log(alternar)

alternar.addEventListener('click',function(e){
e.currentTarget.classList.toggle('activo')

})

/*
classList > representa la lista de clases asignadas a un elemento
toggle cambiar > nos permite "prender" o "apagar" una clase de este objeto
add > agregar clases
remove > quitar clase/s
*/