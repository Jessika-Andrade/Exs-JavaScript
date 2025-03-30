/* Peça ao usuário para digitar um número e exiba a soma de todos os números de 1 até esse número. */

let numero = Number(prompt('Digite um número: '));
let contador = 1;
let soma = 0;

while (contador <= numero) {
    soma += contador;
    contador++;
}

console.log(`A soma de todos os números de 1 até ${numero} é ${soma}`);