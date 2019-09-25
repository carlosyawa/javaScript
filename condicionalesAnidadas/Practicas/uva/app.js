let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let tipoUva = document.getElementById('tipoUva').value;
    let tamanoUva = Number(document.getElementById('tamanoUva').value);
    let precioUva = Number(document.getElementById('precioUva').value);
    let imprimirResultado = document.getElementById('resultado');

    let precioTotal = 0;
    /*     • Si es tipo A, se le cargan 20c al precio inicial cuando es de tamaño 1;
     y 30c cuando es de tamaño 2.
        • Si es tipo B, se rebajan 30c cuando es de tamaño 1,
         y 50c cuando es de tamaño 2   */

    if (tipoUva == 'A' && tamanoUva == 1) {
        precioTotal = precioUva + .20;
        imprimirResultado.innerHTML('El precio de la uva es de:  ' + precioTotal);
    } else if (tipoUva == 'A' && tamanoUva == 2) {
        precioTotal = precioUva + .30;
        imprimirResultado.innerHTML('El precio de la uva es de:  ' + precioTotal);

    } else if (tipoUva == 'B' && tamanoUva == 11) {
        precioTotal = precioUva + .30;
        imprimirResultado.innerHTML('El precio de la uva es de:  ' + precioTotal);
    } else if (tipoUva == 'B' && tamanoUva == 2) {
        precioTotal = precioUva + .50;
        imprimirResultado.innerHTML('El precio de la uva es de:  ' + precioTotal);
    }


}