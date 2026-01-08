//Escribe un programa que calcule el Índice de Masa 
//Corporal (IMC). El IMC se calcula con la fórmula:  
//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado. 
//Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
//Pista 2: La fórmula puede representarse así: 
//let imc = peso / (altura * altura);

const prompt = require("prompt-sync")();
let peso = parseFloat(prompt("Ingresa tu peso en kilogramos: "));
let altura = parseFloat(prompt("Ingresa tu altura en metros: "));
let imc = peso / (altura * altura);
console.log("Tu Índice de Masa Corporal (IMC) es:", imc);

