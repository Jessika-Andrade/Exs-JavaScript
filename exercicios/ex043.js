/* Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas. */

let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));
let nota3 = Number(prompt('Digite a terceira nota: '));
let media = (nota1 + nota2 + nota3) / 3;

console.log(`As notas foram: ${nota1}, ${nota2}, ${nota3}. Portanto, a média é ${media.toFixed(2)}`);

if (media >= 7) {
    console.log('APROVADO!');
} else {
    console.log('REPROVADO!');
}