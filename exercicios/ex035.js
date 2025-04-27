/* Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo. */ 

let numero = Number(prompt('Digite um número: '));

console.log(`O número ${numero} é ${numero % 2 === 0 ? "par" : "ímpar"}.`);
console.log(`O número é ${numero > 0 ? "positivo" : numero < 0 ? "negativo" : "neutro"}.`);