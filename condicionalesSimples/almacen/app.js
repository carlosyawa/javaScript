let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', compra);

}

function compra() {

    let precioCompra = Number(document.getElementById('compra').value);
    let resultado = document.getElementById('resultado');
    let precioReal = precioCompra * 0.20;
    let precioDesc = precioCompra - precioReal;

    if (precioCompra > 1000) {
        resultado.innerHTML = ('El total de su compra es de: ' + precioDesc);

    } else {
        resultado.innerHTML = ('Usted no tiene descuento, el total de su compra es: ' + precioCompra);




    }
}