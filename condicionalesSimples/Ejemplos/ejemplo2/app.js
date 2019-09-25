let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcular);

}

function calcular() {

    let NumeroUno = Number(document.getElementById('NumeroUno').value);
    let NumeroDos = Number(document.getElementById('NumeroDos').value);
    let resultado = document.getElementById('resultado');

    if (NumeroUno > NumeroDos) {
        resultado.innerHTML = ('El numero mayor es:' + NumeroUno);
    } else if (NumeroUno < NumeroDos) {
        resultado.innerHTML = ('El numero mayor es:' + NumeroDos);
    } else {
        resultado.innerHTML = ('Los numero son iguales');
    }

}