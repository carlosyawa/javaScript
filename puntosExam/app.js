let btnCalcular = document.getElementById('btnCalcular');

//Se invoca funcion "EventListener"
eventListener();

//Se crea la funcion evenListener para encapsular los objetos que llevaran el metodo de eventListener
function eventListener() {

    btnCalcular.addEventListener('click', obtenerPuntaje)

}

function obtenerPuntaje() {

    //Se obtiene el valor de los input y se convierte el tipo de dato a number y se le asigna el valor a la variable correspondiente
    let Correctas = Number(document.getElementById('Correctas').value);
    let Incorrectas = Number(document.getElementById('Incorrectas').value);
    let Nulas = Number(document.getElementById('Nulas').value);

    let resultado = 0;
    Correctas = Correctas * 4;
    Incorrectas = Incorrectas * (-1);
    Nulas = 0;

    resultado = (Correctas + Incorrectas + Nulas);

    let imprimirResultado = document.getElementById('resultado');


    imprimirResultado.innerHTML = resultado + " Puntos ";

}