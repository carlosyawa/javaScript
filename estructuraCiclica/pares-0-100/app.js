//CASHDOM
let StartBtn = document.getElementById('StartBtn');

//LISTENERS
StartBtn.addEventListener('click', List);



//FUNCTIONS
async function List() {
    let id;
    for (let x = 0; x <= 100; x++) {
        if (x <= 25) {
            id = 'PartI';
            await stop(x, id);
        } else if (x <= 50) {
            id = 'PartII';
            await stop(x, id);

        } else if (x <= 75) {
            id = 'PartIII';
            await stop(x, id);

        } else {
            id = 'PartIV';
            await stop(x, id);

        }

    }
}

function stop(x, id) {

    return new Promise((res, rej) => {


        setTimeout(() => {

            res(createList(x, id))

        }, 200);


    })



}

function createList(x, id) {

    let Ul = document.createElement('ul');
    Ul.setAttribute('class', 'list-group list-group-flush');

    let Li = document.createElement('li');
    Li.setAttribute('class', 'list-group-item');
    Li.appendChild(document.createTextNode(`${x}`));

    let Part = document.getElementById(id);
    Part.appendChild(Ul);
    Ul.appendChild(Li);

}