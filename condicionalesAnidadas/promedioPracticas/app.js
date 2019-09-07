let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcularEdad);

}

function calcularEdad() {

    let notaA = Number(document.getElementById('notaA').value);
    let notaB = Number(document.getElementById('notaB').value);
    let notaC = Number(document.getElementById('notaC').value);
    let notaD = Number(document.getElementById('notaD').value);
    let promedioA = (notaB + notaC + notaD) / 3;
    let promedioB = (notaA + notaC + notaD) / 3;
    let promedioC = (notaB + notaA + notaD) / 3;
    let promedioD = (notaA + notaC + notaB) / 3;
    let resultado = document.getElementById('resultado');


    if (notaA < notaB && notaA < notaC && notaA < notaD) {
        resultado.innerHTML = (`La nota eliminada es: ${notaA}
y el promedio final es ${promedioA} `);
    } else if (notaB < notaA && notaB < notaC && notaB < notaD) {
        resultado.innerHTML = (`La nota eliminada es: ${notaB}
        y el promedio final es ${promedioB} `);
    } else if (notaC < notaA && notaC < notaB && notaC < notaD) {
        resultado.innerHTML = (`La nota eliminada es: ${notaC}
        y el promedio final es ${promedioC} `);
    } else if (notaD < notaA && notaD < notaB && notaD < notaC) {
        resultado.innerHTML = (`La nota eliminada es: ${notaD}
        y el promedio final es ${promedioD} `);
    }
}