let btnCalcular = document.getElementById('btnCalcular');

//Se invoca funcion "EventListener"
eventListener();

//Se crea la funcion evenListener para encapsular los objetos que llevaran el metodo de eventListener
function eventListener() {

    btnCalcular.addEventListener('click', obtenerViaticos)

}

function obtenerViaticos() {

    //Se obtiene el valor de los input y se convierte el tipo de dato a number y se le asigna el valor a la variable correspondiente
    let Hotel = Number(document.getElementById('Hotel').value);
    let Comidas = Number(document.getElementById('Comidas').value);
    let Dias = Number(document.getElementById('Dias').value);

    let resultado = 0;
    resultado = (Hotel * Dias) + (Comidas * Dias) + (Dias * 100);



    let imprimirResultado = document.getElementById('resultado');


    imprimirResultado.innerHTML = resultado + " Pesos ";

}