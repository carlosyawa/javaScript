let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let numero = Number(document.getElementById('precio').value);
    let imprimirResultado = document.getElementById('resultado');


    if (numero > 3600) {
        let descuento = numero * .16;
        let precio = numero - descuento;
        imprimirResultado.innerHTML = ('El preco del traje es de ' + precio);

    } else {
        let descuento = numero * .7;

        imprimirResultado.innerHTML = ('El preco del traje es de ' + descuento);
    }


}