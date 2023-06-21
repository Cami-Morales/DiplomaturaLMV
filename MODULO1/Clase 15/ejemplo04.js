function allParrafos() {

    const allparraf = document.getElementsByTagName('p');

    //console.log(allparraf)

    const num = allparraf.length; // 
    //console.log(num);

    alert(`Hay ${num} elementos <p> en este documento`)

}

function caja1P() {

    const caja1P = document.getElementById('caja1'); // id en el div

    console.log(caja1P); // me muestra 5 parrafos

    const parrafoscaja1 = caja1P.getElementsByTagName('p')

    console.log(parrafoscaja1)

    const num = parrafoscaja1.length;

    console.log(num); // 5

    alert(`Hay ${num} elementos <p> en el div Caja 1`)
    console.log(`Hay ${num} elementos <p> en el div Caja 1`)
}


function caja2P() {

    const caja2P = document.getElementById('caja2'); // id en el div

    console.log(caja2P); // me muestra 5 parrafos

    const parrafoscaja2 = caja2P.getElementsByTagName('p')

    console.log(parrafoscaja2)

    const num = parrafoscaja2.length;

    console.log(num); // 5

    alert(`Hay ${num} elementos <p> en el div Caja 2`)
    console.log(`Hay ${num} elementos <p> en el div Caja 2`)
}