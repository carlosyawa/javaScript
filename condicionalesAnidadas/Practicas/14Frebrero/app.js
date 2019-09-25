let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let presupuesto = Number(document.getElementById('presupuesto').value);
    let imprimirResultado = document.getElementById('resultado');

    if (presupuesto <= 10) {
        imprimirResultado.innerHTML = ('Tarjeta');
    } else if (presupuesto >= 11 && presupuesto <= 100) {
        imprimirResultado.innerHTML = ('Chocolates');
    } else if (presupuesto >= 101 && presupuesto <= 250) {
        imprimirResultado.innerHTML = ('Flores');
    } else if (presupuesto >= 251) {
        imprimirResultado.innerHTML = ('Anillo');
    }





}