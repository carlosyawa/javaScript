let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let numero = Number(document.getElementById('numero').value);
    let imprimirResultado = document.getElementById('resultado');

    if (numero == 1) {
        imprimirResultado.innerHTML = ('Lunes');
    } else if (numero == 2) {
        imprimirResultado.innerHTML = ('Martes');
    } else if (numero == 3) {
        imprimirResultado.innerHTML = ('Miercoles');
    } else if (numero == 4) {
        imprimirResultado.innerHTML = ('Jueves');
    } else if (numero == 5) {
        imprimirResultado.innerHTML = ('Viernes');
    } else if (numero == 6) {
        imprimirResultado.innerHTML = ('Sabado');
    } else if (numero == 7) {
        imprimirResultado.innerHTML = ('Domingo');
    } else if (numero < 1 || numero > 7) {
        imprimirResultado.innerHTML = ('ERROR, ingrese un numero del 1-7');
    }



}