let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let numeroUno = Number(document.getElementById('numeroA').value);
    let numeroDos = Number(document.getElementById('numeroB').value);
    let imprimirResultado = document.getElementById('resultado');

    if (numeroUno > numeroDos) {
        if (numeroUno % numeroDos == 0) {
            imprimirResultado.innerHTML = ('El numero ' + numeroUno + ' es multiplo de ' + numeroDos);
        } else {
            imprimirResultado.innerHTML = ('El numero ' + numeroUno + ' no es multiplo de ' + numeroDos);
        }
    } else if (numeroDos % numeroUno == 0) {
        imprimirResultado.innerHTML = ('El numero ' + numeroDos + ' es multiplo de ' + numeroUno);
    } else {
        imprimirResultado.innerHTML = ('El numero ' + numeroDos + ' no es multiplo de ' + numeroUno);
    }



}