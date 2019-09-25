let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numeroUno = Number(document.getElementById('numeroUno').value);
    let numeroDos = Number(document.getElementById('numeroDos').value);
    let numeroTres = Number(document.getElementById('numeroTres').value);
    let imprimirResultado = document.getElementById('resultado');


    if (numeroUno > numeroDos) {
        if (numeroUno > numeroTres) {
            if (numeroDos > numeroTres) {
                imprimirResultado.innerHTML = (' ' + numeroUno + ' ' + numeroDos + ' ' + numeroTres);
            } else {
                imprimirResultado.innerHTML = (' ' + numeroUno + ' ' + numeroTres + ' ' + numeroDos);

            }
        } else {
            imprimirResultado.innerHTML = (' ' + numeroTres + ' ' + numeroUno + ' ' + numeroDos);

        }


    } else if (numeroDos > numeroTres) {
        if (numeroUno > numeroTres) {
            imprimirResultado.innerHTML = (' ' + numeroDos + ' ' + numeroUno + ' ' + numeroTres);
        } else {
            imprimirResultado.innerHTML = (' ' + numeroDos + ' ' + numeroTres + ' ' + numeroUno);

        }
    } else {
        imprimirResultado.innerHTML = (' ' + numeroTres + ' ' + numeroDos + ' ' + numeroUno);

    }

}