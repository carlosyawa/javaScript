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
    } else
        cuota = 950;
    if (alcohol == "Si") {
        cargos = cargos + cuota * 0.1;
    }
    if (lentes == "Si") {
        cargos = cargos + cuota * 0.05;
    }
    if (enfermedad == "Si")
        cargos = cargos + cuota * 0.05;
    if (edad > 40) {
        cargos = cargos + cuota * 0.2;
    } else {
        cargos = cargos + cuota * 0.1;
    }
    costoTotal = cuota + cargos;
    imprimirResultado.innerHTML = ('Cargos ' + cargos);
    imprimirResultado.innerHTML = ('poliza ' + tipoPoliza);
    imprimirResultado.innerHTML = ('cuota ' + cuota);


    /* 
    document.formulario1.cargos.value = cargos;
    document.formulario1.costo_de_la_poliza.value = costo_de_la_poliza;
    document.formulario1.cuota.value = cuota;
} */

}