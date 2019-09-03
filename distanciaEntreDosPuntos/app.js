let btnCalcular = document.getElementById('btnCalcular');

//Se invoca funcion "EventListener"
EventListener();

//Se crea la funcion evenListener para encapsular los objetos que llevaran el metodo de eventListener
function EventListener() {

    btnCalcular.addEventListener('click', obtenerArea)

}

function obtenerArea() {

    //Se obtiene el valor de los input y se convierte el tipo de dato a number y se le asigna el valor a la variable correspondiente
    let AbscisaA = Number(document.getElementById('AbscisaA').value);
    let AbscisaB = Number(document.getElementById('AbscisaB').value);
    let OrdenadaA = Number(document.getElementById('OrdenadaA').value);
    let OrdenadaB = Number(document.getElementById('OrdenadaB').value);

    let resultado = 0;

    resultado = Math.sqrt(Math.abs((((AbscisaB - AbscisaA) * (AbscisaB - AbscisaA)) + ((OrdenadaB - OrdenadaA) * (OrdenadaB - OrdenadaA)))));


    let imprimirResultado = document.getElementById('resultado');


    imprimirResultado.innerHTML = resultado + " M ";

}