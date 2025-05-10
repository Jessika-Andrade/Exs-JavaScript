/* Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas. Fórmula: C = (5 * ( F-32) / 9) */

let temperaturaF = Number(prompt('Digite a temperatura em fahrenheit: '));
let temperaturaC = (5 * (temperaturaF - 32) / 9);

console.log(`A temperatura em F° é ${temperaturaF} e em C° é ${temperaturaC.toFixed(2)}`);

