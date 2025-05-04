/* Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores. */

let valorA = prompt('Digite o valor de A: ');
let valorB = prompt('Digite o valor de B: ');

console.log(`O antigo valor de A é ${valorA} e o valor de B é ${valorB}.`);

let temp = valorA;
valorA = valorB;
valorB = temp;

console.log(`O novo valor de A é ${valorA} e o valor de B é ${valorB}.`);
