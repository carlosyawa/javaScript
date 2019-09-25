let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', calcular);
}


function calcular() {

    let camion = document.getElementById('tipo').value;
    let personas = Number(document.getElementById('personas').value);
    let kilometros = Number(document.getElementById('kilometros').value);
    let imprimirResultado = document.getElementById('resultado');
    let costoTotal = 0;
    let costoPersona = 0;

    if (camion == 'a' || camion == 'A') {
        if (personas >= 20) {
            costoTotal = (kilometros * 1.5) * personas;
            costoPersona = costoTotal / personas;
            imprimirResultado.innerHTML = ('El costo total es de ' + costoTotal + ' <br/> El costo por persona es de: ' + costoPersona);

        } else {
            costoTotal = (kilometros * 1.5) * 20;
            costoPersona = costoTotal / 20;
            imprimirResultado.innerHTML = ('El costo total es de ' + costoTotal + ' <br/> El costo por persona es de: ' + costoPersona);

        }

    } else if (camion == 'b' || camion == 'B') {

        if (personas >= 20) {
            costoTotal = (kilometros * 2) * personas;
            costoPersona = costoTotal / personas;
            imprimirResultado.innerHTML = ('El costo total es de ' + costoTotal + ' <br/> El costo por persona es de: ' + costoPersona);

        } else {
            costoTotal = (kilometros * 2) * 20;
            costoPersona = costoTotal / 20;
            imprimirResultado.innerHTML = ('El costo total es de ' + costoTotal + ' <br/> El costo por persona es de: ' + costoPersona);

        }
    } else if (camion == 'c' || camion == 'C') {
        if (personas >= 20) {
            costoTotal = (kilometros * 2.5) * personas;
            costoPersona = costoTotal / personas;
            imprimirResultado.innerHTML = ('El costo total es de ' + costoTotal + ' <br/> El costo por persona es de: ' + costoPersona);

        } else {
            costoTotal = (kilometros * 2.5) * 20;
            costoPersona = costoTotal / 20;
            imprimirResultado.innerHTML = ('El costo total es de ' + costoTotal + ' <br/> El costo por persona es de: ' + costoPersona);

        }
    } else if (camion == 'd' || camion == 'D') {
        if (personas >= 20) {
            costoTotal = (kilometros * 3) * personas;
            costoPersona = costoTotal / personas;
            imprimirResultado.innerHTML = ('El costo total es de ' + costoTotal + ' <br/> El costo por persona es de: ' + costoPersona);

        } else {
            costoTotal = (kilometros * 3) * 20;
            costoPersona = costoTotal / 20;
            imprimirResultado.innerHTML = ('El costo total es de ' + costoTotal + ' <br/> El costo por persona es de: ' + costoPersona);

        }
    } else if (camion = !'a' && camion == !'A' || camion == !'b' && camion == !'B' || camion == !'c' && camion == !'C' || camion == !'d' && camion == !'D') {
        imprimirResultado.innerHTML('Este tipo de camion no existe ')
    }

}