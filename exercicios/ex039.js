/* Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%. */

let valor = Number(prompt('Digite um valor: '));
let reajuste = (valor) + valor * 0.05;

console.log(`O valor era R$${valor.toFixed(2)}, mas com o reajuste é R$${reajuste.toFixed(2)}.`);