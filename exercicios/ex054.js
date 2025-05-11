/* Faça um algoritmo que leia dois valores inteiros A e B, imprima na tela o quociente e o resto da divisão inteira entre eles. */

let valorA = parseInt(prompt('Digite o primeiro valor: '));
let valorB = parseInt(prompt('Digite o segundo valor: '));
let quociente = Math.floor(valorA / valorB);
let restoDivisao = valorA % valorB;

console.log(`O quociente é ${quociente} e o resto da divisão é ${restoDivisao}`);