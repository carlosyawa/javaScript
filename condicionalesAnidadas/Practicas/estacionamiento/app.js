let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', contar);


}


function contar() {

    let numero = Number(document.getElementById('horas').value);
    let imprimirResultado = document.getElementById('resultado');
    let cobro = 0;
    if (numero >= 0 && numero <= 2) {
        cobro = numero * 5;
        imprimirResultado.innerHTML = ('El total es: ' + cobro);
    } else if (numero >= 3 && numero <= 5) {
        cobro = 2 * 5 + (numero - 2) * 4;
        imprimirResultado.innerHTML = ('El total es: ' + cobro);
    } else if (numero >= 6 && numero <= 10) {
        cobro = 2 * 5 + 5 * 4 + (numero - 5) * 3;
        imprimirResultado.innerHTML = ('El total es: ' + cobro);
    } else if (numero > 10) {
        cobro = 2 * 5 + 3 * 4 + 3 * 5 + (numero - 10) * 2
        imprimirResultado.innerHTML = ('El total es: ' + cobro);
    }



}