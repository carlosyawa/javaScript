let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let tipoPoliza = document.getElementById('poliza').value;
    let edad = Number(document.getElementById('edad').value);
    let alcohol = document.getElementById('alcohol').value;
    let lentes = document.getElementById('lentes').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let imprimirResultado = document.getElementById('resultado');

    let cuota = 0;
    let cargos = 0;
    let costoTotal = 0;

    if (tipoPoliza == 'A') {
        cuota = 1200;
    }






}