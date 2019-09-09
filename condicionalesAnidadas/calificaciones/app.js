let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let numero = Number(document.getElementById('numero').value);
    let imprimirResultado = document.getElementById('resultado');
    if (numero > 10 || numero < 0) {
        imprimirResultado.innerHTML = ('ERROR, la calificacion no existe');
    }
    if (numero == 10) {
        imprimirResultado.innerHTML = ('A');
    } else if (numero == 9) {
        imprimirResultado.innerHTML = ('B');
    } else if (numero == 8) {
        imprimirResultado.innerHTML = ('C');
    } else if (numero == 7) {
        imprimirResultado.innerHTML = ('D');
    } else if (numero == 6) {
        imprimirResultado.innerHTML = ('E');
    } else if (numero <= 5) {
        imprimirResultado.innerHTML = ('F');
    }



}