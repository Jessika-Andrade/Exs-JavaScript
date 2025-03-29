/* Peça ao usuário para digitar um número e, usando um loop for, exiba a contagem regressiva desse número até zero. */

let numero = Number(prompt('Digite um número: '));

for(let i = numero; i >= 0; i--) {
    console.log(i);
}