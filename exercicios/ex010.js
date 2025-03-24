/* Peça para o usuário digitar um número e verifique se ele é positivo, negativo ou zero. */

let numero = Number(prompt('Digite um número: '));

if (numero > 0) {
    console.log('POSITIVO!');
} else if (numero === 0) {
    console.log('O NÚMERO É ZERO!');
} else {
    console.log('O NÚMERO É NEGATIVO.');
}