let btnVerificarEstatus = document.getElementById('btnVerificarEstatus');

EventListener();

function EventListener() {
    btnVerificarEstatus.addEventListener('click', verificarEstatus);

}

function verificarEstatus() {
    let calificacion = Number(document.getElementById('Calificacion').value);
    let imprimirResultado = document.getElementById('ImprimirCalificacion');

    if (calificacion > 8) {
        imprimirResultado.innerHTML = 'Aprobado';
    } else {
        let audio = document.getElementById('AudioDonRamon');
        audio.play();
        imprimirResultado.innerHTML = 'Reprobado';


    }

}