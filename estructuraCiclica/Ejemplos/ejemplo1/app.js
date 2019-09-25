sumaCantidades();


function sumaCantidades() {


    let y = 0;

    //Estructura ciclica la cual se compone de un (variable inicialzada, condicion logia y el incrementador de la variable), la cual nos ayuda a la ejecucion repetitiva de un bloquede codigo.
    for (let x = 0; x < 10; x++) {
        // y = y + x;
        y += x;
        //Se crea el elemento li por medio del metodo createElement y se asigna a la variable newli
        let newli = document.createElement('li');
        //Se asigna el atributo id y class a la variable newli
        newli.setAttribute("id", `listaN ${x}`);
        newli.setAttribute("class", "list-group-item");

        //se crea el nodo de texto por medio del metodo createTextNode
        let newContent = document.createTextNode(y);

        //Se inserta un hijo por medio del metodo appendChild a la variable newli
        newli.appendChild(newContent);

        let listaDesordenada = document.getElementById('listaNumerica');
        listaDesordenada.appendChild(newli);

    }


}