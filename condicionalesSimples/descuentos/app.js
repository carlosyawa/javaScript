let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', descuento);

}

function descuento() {

    let Precio = Number(document.getElementById('precio').value);
    let Clave = Number(document.getElementById('clave').value);
    let Nombre = document.getElementById('producto').value;
    let real1 = Precio * 0.10;
    let real2 = Precio * 0.20;
    let precioDescuento01 = Precio - real1;
    let precioDescuento02 = Precio - real2;
    let resultado = document.getElementById('resultado');

    if (Clave == 01) {
        resultado.innerHTML = ('El descuento es del 10%  ' + ' <br/> Nombre del producto: ' + Nombre + '<br/> clave del producto: ' + Clave + '<br/> Precio del producto: ' + Precio + '<br/> Precio con descuento: ' + precioDescuento01);

    } else if (Clave == 02) {
        resultado.innerHTML = ('El descuento es del 20%  ' + ' <br/> Nombre del producto: ' + Nombre + '<br/> Precio del producto: ' + Precio + '<br/> Precio con descuento: ' + precioDescuento02);

    } else {
        resultado.innerHTML = ('esta clave no tiene descuento' + ' <br/> Nombre del producto: ' + Nombre + '<br/> Precio del producto: ' + Precio);
    }



}