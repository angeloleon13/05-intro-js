alert('QUE TAL, SEAN BIENVENIDOS/AS')

var nombre = prompt('¿Cual es tu nombre');
console.log('Ejercicio-1');
var tarea = prompt('¿Hiciste la tarea?');
if(tarea ==='si'){
    alert('¡Bien hecho!')
} else{
    alert('No te rindas' + ' ¡Empieza ya mismo!')
}

console.log('Ejercicio-2');
var grados = prompt('¿Cual es la temperatura en grados Fahrenheit?');
var res;
res=((grados-32)*(5/9));
alert("La temperatura en celcius es: "+res );

//ejercicio 3//

var n1,n2,n3,t,mayor;
console.log(n1, n2, n3);

var n1 = parseInt(prompt("¿Cual es el 1er numero?"));
var n2 = parseInt(prompt("¿Cual es el 2do numero?"));
var n3 = parseInt(prompt("¿Cual es el 3er numero?"));

if (n1 > n2) {
    t = n1;
}else{
    t = n2;
}

if (t > n3) {
    mayor = t;
}else{
    mayor = n3;
}

alert("El mayor es "+mayor);
