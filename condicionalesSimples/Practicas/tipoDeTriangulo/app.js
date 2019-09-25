let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', triangulo);

}

function triangulo() {

    let Altura = Number(document.getElementById('altura').value);
    let Base = Number(document.getElementById('base').value);
    let Hipotenusa = Number(document.getElementById('hipotenusa').value);

    let resultado = document.getElementById('resultado');

    if (Altura == Base && Base == Hipotenusa) {
        resultado.innerHTML = ('El triangulo es equilatero');

    } else if (Altura == Base || Altura == Hipotenusa || Base == Hipotenusa) {
        resultado.innerHTML = ('El triangulo es isosceles');
    } else {
        resultado.innerHTML = ('El triangulo es escaleno');
    }



}