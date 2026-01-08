//Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y 
//luego intercambiá sus valores. Muestra los valores antes y después del 
//intercambio en la consola. 
//Para intercambiar valores puedes usar varios métodos(usando una variable 
//temporal, aritmética o asignación simultánea), eres libre de elegir el que desees, 
//eso si, investiga sobre el que usarás.


 const prompt = require("prompt-sync")();
//Declaración de Variables:
let a = 5;
let b = 10; 

//Mostrar valores antes del intercambio\\\\\

console.log("Antes del intercambio: a =", a, ", b =", b);

//Intercambio de valores usando una variable temp
let temp = a; 
a = b; 
b = temp;       
//Mostrar valores después del intercambio\\\\\
console.log("Después del intercambio: a =", a, ", b =", b);

//Otra forma de intercambio usando asignación simultánea
[a, b] = [b, a];
console.log("Después del segundo intercambio: a =", a, ", b =", b);

//Otra forma de intercambio usando aritmética
a = a + b;
b = a - b;
a = a - b;
console.log("Después del tercer intercambio: a =", a, ", b =", b);      
//Muestra los valores antes y después del intercambio en la consola.
