let btnCalcular = document.getElementById('btnCalcular');

//Se invoca funcion "EventListener"
EventListener();

//Se crea la funcion evenListener para encapsular los objetos que llevaran el metodo de eventListener
function EventListener() {

    btnCalcular.addEventListener('click', obtenerPrecio)

}

function obtenerPrecio() {

    //Se obtiene el valor de los input y se convierte el tipo de dato a number y se le asigna el valor a la variable correspondiente
    let LadoA = Number(document.getElementById('LadoA').value);
    let LadoB = Number(document.getElementById('LadoB').value);

    let resultado = 0;

    resultado = Math.hypot(LadoA, LadoB);
    /* console.log(Math.hypot(LadoA, LadoB)); */
    let imprimirResultado = document.getElementById('resultado');


    imprimirResultado.innerHTML = resultado + "  ";

}