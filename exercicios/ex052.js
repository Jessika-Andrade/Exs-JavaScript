/* Faça um algoritmo que receba um valor inteiro e imprima na tela a sua tabuada. */

let valor = parseInt(prompt('Digite um número: '));

console.log(`Tabuada do ${valor}`);
console.log('---------------');

for (let i = 1; i <= 10; i++) {
    console.log(`${valor} X ${i} = ${valor * i}`);
}