let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let zona = Number(document.getElementById('zona').value);
    let producto = Number(document.getElementById('producto').value);
    let imprimirResultado = document.getElementById('resultado');

    let precio = 0;
    let gramos = 0;

    if (producto <= 5 && zona == 1) {
        gramos = (producto / 1000);
        precio = gramos * 11;
        imprimirResultado.innerHTML = ('Este producto pesa ' + gramos + ' y tiene un costo de ' + precio);
    } else if (producto <= 5 && zona == 2) {
        gramos = (producto / 1000);
        precio = gramos * 10;
        imprimirResultado.innerHTML = ('Este producto pesa ' + gramos + ' y tiene un costo de ' + precio);
    } else if (producto <= 5 && zona == 3) {
        gramos = (producto / 1000);
        precio = gramos * 12;
        imprimirResultado.innerHTML = ('Este producto pesa ' + gramos + ' y tiene un costo de ' + precio);
    } else if (producto <= 5 && zona == 4) {
        gramos = (producto / 1000);
        precio = gramos * 24;
        imprimirResultado.innerHTML = ('Este producto pesa ' + gramos + ' y tiene un costo de ' + precio);
    } else if (producto <= 5 && zona == 5) {
        gramos = (producto / 1000);
        precio = gramos * 27;
        imprimirResultado.innerHTML = ('Este producto pesa ' + gramos + ' y tiene un costo de ' + precio);
    } else if (producto > 5) {
        imprimirResultado.innerHTML = ('No se puede transportar este paquete');
    }



}