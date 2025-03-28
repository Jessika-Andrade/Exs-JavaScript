/* Desafio: Verificar se um número é múltiplo de 3 e 5
Enunciado: Crie um programa que verifique se um número fornecido pelo usuário é múltiplo de 3 e 5. O programa deve mostrar se o número é múltiplo de 3, de 5, ou de ambos. */

let numero = Number(prompt('Digite um número: '));

if(numero % 3 === 0 && numero % 5 === 0) {
    console.log('O número é múltiplo de ambos!');
} else if (numero % 3 === 0) {
    console.log('O número é múltiplo de 3');
} else if (numero % 5 === 0) {
    console.log('O número é múltiplo de 5');
} else {
    console.log('O número não é múltiplo de 3 ou 5');
}