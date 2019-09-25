let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let productoA = Number(document.getElementById('productoA').value);
    let productoB = Number(document.getElementById('productoB').value);
    let productoC = Number(document.getElementById('productoC').value);
    let productoD = Number(document.getElementById('productoD').value);
    let presupuesto = Number(document.getElementById('presupuesto').value);
    let imprimirResultado = document.getElementById('resultado');

    let totalProductos = productoA + productoB + productoC + productoD;

    if (totalProductos > presupuesto) {
        imprimirResultado.innerHTML = ('El precio esta fuera del presupuesto')
    } else {
        imprimirResultado.innerHTML = ('El precio esta dentro del presupuesto')
    }

}