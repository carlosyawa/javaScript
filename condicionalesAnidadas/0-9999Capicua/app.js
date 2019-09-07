let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', contar);

    inputNumber.addEventListener('blur', calcularCifraBlur);
}


function contar() {

    let numero = Number(document.getElementById('numero').value);
    let imprimirResultado = document.getElementById('resultado');
    let unidades = 0;
    let centenas = 0;
    let decenas = 0;
    centenas = Math.floor(numero / 100);
    decenas = Math.floor((numero % 100) / 10)
    unidades = Math.floor((numero % 100) % 10)

    if (numero >= 0 && numero <= 9999) {
        if (centenas == unidades) {
            imprimirResultado.innerHTML = ('El numero ' + numero + ' es capicua');
        } else {
            imprimirResultado.innerHTML = ('El numero ' + numero + ' no es capicua');
        }
    } else {
        imprimirResultado.innerHTML = ('Ingresar un numero correcto');
    }



}