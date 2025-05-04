/* Faça algoritmo que leia o nome e a idade de uma pessoa e imprima na tela o nome da pessoa e se ela é maior ou menor de idade. */ 

let nome = prompt('Digite seu nome: ');
let idade = Number(prompt('Digite sua idade: '));

if (idade >= 18) {
    console.log(`${nome} tem ${idade}. Portanto, é maior de idade.`);
} else {
    console.log(`${nome} tem ${idade}. Portanto, é menor de idade.`)
}