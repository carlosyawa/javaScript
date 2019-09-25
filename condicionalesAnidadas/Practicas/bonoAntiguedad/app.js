let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let antiguedad = Number(document.getElementById('antiguedad').value);
    let sueldo = Number(document.getElementById('sueldo').value);
    let imprimirResultado = document.getElementById('resultado');
    let bonoAntiguedad = 0;
    let bonoMensual = 0;
    let bonoSueldo = 0;

    if (antiguedad > 2 && antiguedad < 5) {
        bonoAntiguedad = sueldo * 0.2;
    } else if (antiguedad > 5) {
        bonoAntiguedad = sueldo * 0.3;
    } else if (sueldo <= 1000) {
        bonoSueldo = sueldo * 0.25;
    } else if (sueldo > 1000 && sueldo <= 3500) {
        bonoSueldo = sueldo * 0.15;
    } else if (sueldo > 3500) {
        bonoSueldo = sueldo * 0.1;
    } else if (bonoAntiguedad > bonoSueldo) {
        bonoMensual = bonoAntiguedad;
    } else {
        bonoMensual = bonoSueldo
        imprimirResultado.innerHTML = ('Valor de bono mensual ' + bonoMensual);
        imprimirResultado.innerHTML = ('Valor de bono por antiguedad ' + bonoAntiguedad);
        imprimirResultado.innerHTML = ('Valor de bono por sueldo ' + bonoSueldo);
    }






}