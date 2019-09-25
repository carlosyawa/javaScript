let btnCalcular = document.getElementById('btnCalcular');

//Se invoca funcion "EventListener"
eventListener();

//Se crea la funcion evenListener para encapsular los objetos que llevaran el metodo de eventListener
function eventListener() {

    btnCalcular.addEventListener('click', obtenerPrecio)

}

function obtenerPrecio() {

    //Se obtiene el valor de los input y se convierte el tipo de dato a number y se le asigna el valor a la variable correspondiente
    let Precio = Number(document.getElementById('Precio').value);
    let Metros = Number(document.getElementById('Metros').value);

    let resultado = 0;

    resultado = (Precio * Metros);

    let imprimirResultado = document.getElementById('resultado');


    imprimirResultado.innerHTML = resultado + " Pesos ";

}