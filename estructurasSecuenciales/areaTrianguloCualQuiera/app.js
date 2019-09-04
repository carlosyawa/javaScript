let btnCalcular = document.getElementById('btnCalcular');

//Se invoca funcion "EventListener"
EventListener();

//Se crea la funcion evenListener para encapsular los objetos que llevaran el metodo de eventListener
function EventListener() {

    btnCalcular.addEventListener('click', obtenerArea)

}

function obtenerArea() {

    //Se obtiene el valor de los input y se convierte el tipo de dato a number y se le asigna el valor a la variable correspondiente
    let ladoUno = Number(document.getElementById('ladoUno').value);
    let ladoDos = Number(document.getElementById('ladoDos').value);
    let ladoTres = Number(document.getElementById('ladoTres').value);

    let resultado = 0;
    let semiperimetro = 0;
    let Area = 0;
    semiperimetro = (ladoUno + ladoDos + ladoTres) / 2;


    resultado = semiperimetro * (semiperimetro - ladoUno) *
        (semiperimetro - ladoDos) * (semiperimetro - ladoTres);


    Area = Math.sqrt(resultado);



    let imprimirResultado = document.getElementById('resultado');


    imprimirResultado.innerHTML = resultado + " Area ";

}