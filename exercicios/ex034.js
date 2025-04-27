/* Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se
 a soma é menor que C */ 

let valorA = Number(prompt('Digite um valor: '));
let valorB = Number(prompt('Digite um novo valor: '));
let valorC = Number(prompt('Digite mais um valor: '));
let soma = valorA + valorB;

if (soma < valorC) {
    console.log(`A soma do valor ${valorA} e ${valorB} é ${soma}. Ela é menor que ${valorC}.`);
} else if (soma === valorC) {
    console.log(`A soma de ${valorA} e ${valorB} é ${soma}. Ela é igual a ${valorC}.`)
} else {
    console.log(`A soma de ${valorA} e ${valorB} é ${soma}. Ela é maior que ${valorC}.`);
}