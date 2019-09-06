let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', contar);


}


function contar() {

    let numero = Number(document.getElementById('horas').value);
    let imprimirResultado = document.getElementById('resultado');
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;
    if (numero >= 0 && numero <= 2) {
        total1 = numero * 5;
        imprimirResultado.innerHTML = ('El total es: ' + total1);
    } else if (numero >= 3 && numero <= 5) {
        total2 = (numero * 4) + 10;
        imprimirResultado.innerHTML = ('El total es: ' + total2);
    } else if (numero >= 6 && numero <= 10) {
        total3 = (numero * 3) + 22
        imprimirResultado.innerHTML = ('El total es: ' + total3);
    } else if (numero > 10) {
        total4 = (numero * 2) + 37
        imprimirResultado.innerHTML = ('El total es: ' + total4);
    }



}