/* Elaborar um programa que leia 2 notas de um aluno em uma disciplina.
Calcule e informe a média das notas.
Exemplo:
1ª Nota: 7.0
2ª Nota: 8.0
Média: 7.5 */

let nota1 = Number(prompt('Digite a nota 1: '));
let nota2 = Number(prompt('Digite a nota 2: '));
let media = (nota1 + nota2) / 2;

console.log(`1ª nota: ${nota1}, 2ª nota: ${nota2}. A média das notas é ${media.toFixed(2)}.`);