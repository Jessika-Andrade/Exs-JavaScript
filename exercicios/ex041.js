/* Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente. */

let n1 = parseInt(prompt('Digite o primeiro número: '));
let n2 = parseInt(prompt('Digite o segundo número: '));
let n3 = parseInt(prompt('Digite o terceiro número: '));

let numero = [n1, n2, n3];

numero.sort((a, b) => b - a);

console.log(`A ordem dos números decrescente é ${numero.join(', ')}.`);