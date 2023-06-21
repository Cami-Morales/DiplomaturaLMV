// seleccionar todos los li con clase item
const items = document.getElementsByClassName('item') // class =item

//necesito algo que los recorra > for 
for(let i=0; i <items.length; i++){

    items[i].style = 'color:blue; padding-left: ' + (10* i) + 'px';
}

frutas = ['manzana', 'banana']

const primera = frutas[0];
console.log(primera);
console.log(segunda);