/* Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor. */ 

let numero = parseInt(prompt('Digite um número: '));
let antecessor = numero - 1;
let sucessor = numero + 1;

console.log(`O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.`);