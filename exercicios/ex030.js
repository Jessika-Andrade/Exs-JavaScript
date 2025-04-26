/* Elaborar um programa que leia um número. Calcule e informe os seus
vizinhos, ou seja, o número anterior e posterior.
Exemplo:
Número: 15
Vizinhos: 14 e 16
*/ 

let numero = Number(prompt('Digite um número: '));
let numeroAnterior = numero - 1;
let numeroPosterior = numero + 1;

console.log(`O número selecionado foi: ${numero}. Seus vizinhos são ${numeroAnterior} e ${numeroPosterior}.`);