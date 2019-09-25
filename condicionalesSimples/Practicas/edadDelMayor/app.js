let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcularEdad);

}

function calcularEdad() {

    let NumeroUno = Number(document.getElementById('edadUno').value);
    let NumeroDos = Number(document.getElementById('edadDos').value);
    let resultado = document.getElementById('resultado');
    let edad = 0;
    let edad1 = 0;
    edad = NumeroUno - NumeroDos;
    edad1 = NumeroDos - NumeroUno;

    if (NumeroUno > NumeroDos) {
        resultado.innerHTML = ('El hermano mayor tiene: ' + NumeroUno + ' años y es ' + edad + ' años mayor');
    } else if (NumeroUno < NumeroDos) {
        resultado.innerHTML = ('El hermano mayor tiene: ' + NumeroDos + ' años y es ' + edad1 + ' años mayor');
    } else {
        resultado.innerHTML = ('Los dos hermanos tienen la misma edad');
    }

}