/*Diseña un algoritmo en el que se ingrese 2 digitos para restarlos y el programa los contabilice y 
los acumule usando el while.*/
let i=0;
let acum=0;
let num;
let num1;
while (i<2){
    num =parseInt(prompt('ingrese un numero:'));
    num1 =num;
    acum= acum + num;
    i++;
}
resta = num1 - num;
alert('la resta de los numero es '+resta +' y el valor del acumulador es '+acum)