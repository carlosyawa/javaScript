let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', contar);

    //inputNumber.addEventListener('blur', calcularCifraBlur);
}


function contar() {

    let numero = Number(document.getElementById('numero').value);
    let imprimirResultado = document.getElementById('resultado');
    let unidades = 0;
    let centenas = 0;
    let decenas = 0;
    let unidadesMillar = 0;
    let decenasMillar = 0;

    /* centenas = Math.floor(numero / 100);
    decenas = Math.floor((numero % 100) / 10)
    unidades = Math.floor((numero % 100) % 10) */

    unidades = numero % 10;
    console.log(unidades)



    unidadesMillar = numero % 1000;
    unidadesMillar = (numero - unidadesMillar) / 1000
    console.log(unidadesMillar);

    centenas = numero % 100;
    centenas = ((numero - (unidadesMillar * 1000)) - centenas) / 100
    console.log(centenas);

    decenas = numero % 10;
    decenas = ((numero - (unidadesMillar * 1000) - (centenas * 100)) - decenas) / 10
    console.log(decenas);


    //decenas = numero / 10;
    //centenas = numero / 10;
    //unidadesMillar = numero / 10;

    decenasMillar = numero;



    if (unidadesMillar == unidades && centenas == decenas) {
        imprimirResultado.innerHTML = ('El numero ' + numero + ' es capicua ');
    } else {
        imprimirResultado.innerHTML = ('El numero ' + numero + ' no es capicua ');
    }



}