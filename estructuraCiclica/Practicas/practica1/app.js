 //CASHDOM
 let addBtn = document.getElementById('addBtn');
 let CompBtn = document.getElementById('CompBtn');
 let count = 0;
 let positive = 0;
 let negatives = 0;
 let igual = 0;

 //LISTENERS
 addBtn.addEventListener('click', addInput);
 CompBtn.addEventListener('click', Compare);

 //FUNCTIONS
 function addInput() {
     count++;

     let DivRow = document.createElement('div');
     DivRow.setAttribute('class', 'row');

     let DivCol = document.createElement('div');
     DivCol.setAttribute('class', 'col-12');

     let DivFG = document.createElement('div');
     DivFG.setAttribute('class', 'form-group');

     let label = document.createElement('label');
     label.appendChild(document.createTextNode(`Número: ${count}`));

     let input = document.createElement('input');
     input.setAttribute('type', 'number');
     input.setAttribute('class', 'form-control');
     input.setAttribute('id', `Number${count}`);
     input.setAttribute('placeholder', 'Ingresa un valor + o -');

     let Inputs = document.getElementById('numbers');
     Inputs.appendChild(DivRow);
     DivRow.appendChild(DivCol);
     DivCol.appendChild(DivFG);
     DivFG.appendChild(label);
     DivFG.appendChild(input);
 }

 function Compare() {
     let x = 1;
     while (x <= count) {
         let number = Number(document.getElementById(`Number${x}`).value);
         console.log(number);
         if (number > 0) {
             positive++;
         } else if (number < 0) {
             negatives++;
         } else if (number == 0)
             igual++;
         x++;
     }
     let DivRow = document.createElement('div');
     DivRow.setAttribute('class', 'row mt-3');

     let DivCol = document.createElement('div');
     DivCol.setAttribute('class', 'col-12');

     let DivAlert = document.createElement('div');
     DivAlert.setAttribute('class', 'alert alert-info');

     let h4 = document.createElement('h4');
     h4.setAttribute('class', 'alert-heading');
     h4.appendChild(document.createTextNode(`Cantidad de numeros postivos: ${positive} 
      iguales a cero: ${igual}
      menores a cero: ${negatives}`));

     let imp = document.getElementById('imp');
     imp.appendChild(DivRow);
     DivRow.appendChild(DivCol);
     DivCol.appendChild(DivAlert);
     DivAlert.appendChild(h4);

 }