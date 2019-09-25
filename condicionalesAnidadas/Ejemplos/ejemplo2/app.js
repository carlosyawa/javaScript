let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', contar);

    inputNumber.addEventListener('blur', calcularCifraBlur);
}


function contar() {

    let numero = Number(document.getElementById('numero').value);
    let imprimirResultado = document.getElementById('resultado');


    if (numero >= 0 && numero <= 9) {
        imprimirResultado.innerHTML = ('El numero ' + numero + ' es de una cifra');

    } else if (numero > 9 && numero < 100) {
        imprimirResultado.innerHTML = ('El numero ' + numero + ' es de dos cifras');
    } else if (numero > 99 && numero < 1000) {
        imprimirResultado.innerHTML = ('El numero ' + numero + ' es de 3 cifras');
    } else {
        imprimirResultado.innerHTML = ('ERROR el numero ' + numero + ' tiene mas de 3 cifras');
    }


}