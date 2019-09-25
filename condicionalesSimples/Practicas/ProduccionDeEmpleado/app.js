let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcularEdad);

}

function calcularEdad() {

    let Lunes = Number(document.getElementById('lunes').value);
    let Martes = Number(document.getElementById('martes').value);
    let Miercoles = Number(document.getElementById('miercoles').value);
    let Jueves = Number(document.getElementById('jueves').value);
    let Viernes = Number(document.getElementById('viernes').value);
    let Sabado = Number(document.getElementById('sabado').value);
    let resultado = document.getElementById('resultado');

    let produccion = 0;
    produccion = Lunes + Martes + Miercoles + Jueves + Viernes + Sabado;

    if (produccion >= 100) {
        resultado.innerHTML = ('El empledo tiene incentivos con un total de ' + produccion + ' piezas producidas a la semana');

    } else {
        resultado.innerHTML = ('El empledo no tiene incentivos tienen una produccion de ' + produccion + ' piezas producidas a la semana');
    }

}