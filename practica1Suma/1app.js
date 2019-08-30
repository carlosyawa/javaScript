//Esta linea crea una variable la cual se encarga de obtener por medio del objeto document el elemento button con el id "btnCalcular"
let btnCalcular = document.getElementById('btnCalcular');

// por medio del metodo "addEventListener" se le asigno el evento clic al elemento button
// y al mmomento de ejecutar dicho evento se ejecutara la funcion suma
btnCalcular.addEventListener('click', suma);

//Funcion: bloque de codigo que se ejecutahasta cuando se mando a llamar o se invoca. 
//mientras no sea invocada no realizara ninguna accion en el codigo.
function suma() {

    //Se obtendra los valores de o input por medio del metodo "Value"
    let numero1 = document.getElementById('Numero1').value;
    let numero2 = document.getElementById('Numero2').value;

    //Se reasigna el valor de la variable numero2 convirtiendolo de string a numero
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    //Se declara variable resultado y se inicializa con valor '0'.
    let resultado = 0;

    //Despues de obtener los datos de los elementos input se realiza el proceso de suma y se le asigna dicho valor a la varible "resultado"
    resultado = numero1 + numero2;

    //Se asigno a la variable "imprimirResultado" el elemento con el ID "resultado"
    let imprimirResultado = document.getElementById('resultado');

    // por medio del metodo "innerHTML" se asigna el valor de la variable resultado par que se pueda imprimir en el elemento
    imprimirResultado.innerHTML = resultado;

}