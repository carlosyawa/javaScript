let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcularEdad);

}

function calcularEdad() {

    let NumeroUno = Number(document.getElementById('edadUno').value);
    let NumeroDos = Number(document.getElementById('edadDos').value);
    let nombreUno = document.getElementById('nombreUno').value;
    let nombreDos = document.getElementById('nombreDos').value;
    let resultado = document.getElementById('resultado');


    if (NumeroUno > NumeroDos) {
        resultado.innerHTML = ('El hermano mayor es: ' + nombreUno);
    } else {
        resultado.innerHTML = ('El hermano mayor es: ' + nombreDos);
    }

}