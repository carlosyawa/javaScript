let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero1 = Number(document.getElementById('numeroUno').value);
    let numero2 = Number(document.getElementById('numeroDos').value);
    let numero3 = Number(document.getElementById('numeroTres').value);
    let imprimirResultado = document.getElementById('resultado');


    if (numero1 > numero2) {
        if (numero1 > numero3) {
            Console.log('numeroUno es el mayor');
            imprimirResultado.innerHTML = ` <p>El numero ${numero1} es el numero mayor </p> `

            /*     if(numero1==numero2){
                Console.log('numeroUno es el mayor');
                imprimirResultado.innerHTML = ` <p>El numero ${numero1} y el numero ${numero2} son iguales </p> `
      } */
        }

    } else if (numero1 < numero2) {
        if (numero2 > numero3) {
            Console.log('numeroUno es el mayor');
            imprimirResultado.innerHTML = ` <p>El numero ${numero2} es el numero mayor </p> `

        }
    } else {
        Console.log('numeroUno es el mayor');
        imprimirResultado.innerHTML = ` <p>El numero ${numero3} es el numero mayor </p> `

    }
}