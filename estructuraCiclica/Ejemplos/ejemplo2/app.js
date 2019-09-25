let btnAgregarFG = document.getElementById('btnAgregarFG');
let numeroInput = 0;
let btnCalcularPromedio = document.getElementById('btnCalcularPromedio');

EventListener()

function EventListener() {

    btnAgregarFG.addEventListener('click', agregarFG);
    btnCalcularPromedio.addEventListener('click', calcularPromedio);
}


function calcularPromedio() {

    let suma = 0;
    let promedio = 0;

    for (let x = 1; x <= numeroInput; x++) {
        let edad = Number(document.getElementById(`edadAlumno${x}`).value);
        console.log(edad);

        suma += edad;

    }

    promedio = suma / numeroInput;
    let imprimir = document.getElementById('imprimir');
    imprimir.innerHTML = (promedio);
}


function agregarFG() {

    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivFormGroup = document.createElement('div');
    DivFormGroup.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa la edad del alumno ${numeroInput}`);
    labelFG.appendChild(textLabel);

    let inputFC = document.createElement('input');
    inputFC.setAttribute('type', 'number')
    inputFC.setAttribute('class', 'form-control')
    inputFC.setAttribute('placeholder', 'Ingresa la edad del alumno')
    inputFC.setAttribute('id', `edadAlumno${numeroInput}`);

    let cajaAlumnos = document.getElementById('cajaAlumnos');
    cajaAlumnos.appendChild(DivRow);


    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFormGroup);
    DivFormGroup.appendChild(labelFG)
    DivFormGroup.appendChild(inputFC);


}