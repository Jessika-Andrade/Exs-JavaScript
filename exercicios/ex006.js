/* Crie um programa que peça um número ao usuário e diga se ele é par ou ímpar.
Regras:
- Se o número for par, exiba: "O número X é par!"
- Se o número for ímpar, exiba: "O número X é ímpar!" */

let numero = Number(prompt('Digite um número: '));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
} else {
        console.log(`O número ${numero} é ímpar`);
}