let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let kilometros = Number(document.getElementById('kilometros').value);
    let presupuesto = Number(document.getElementById('presupuesto').value);
    let imprimirResultado = document.getElementById('resultado');

    if (kilometros * 750 * 2 <= presupuesto) {
        imprimirResultado.innerHTML = ('Mexico');
    } else if (kilometros * 800 * 2 <= presupuesto) {
        imprimirResultado.innerHTML = ('Acapulco');
    } else if (kilometros * 1200 * 2 <= presupuesto) {
        imprimirResultado.innerHTML = ('P.V.');
    } else if (kilometros * 1800 * 2 <= presupuesto) {
        imprimirResultado.innerHTML = ('Cancun');
    } else {
        imprimirResultado.innerHTML = ('Quedate en casa!');
    }



}