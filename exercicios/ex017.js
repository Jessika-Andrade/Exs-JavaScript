/* Peça para o usuário digitar um número e, utilizando um loop while, conte regressivamente a partir desse número até 1, imprimindo cada número na tela. */

let n = Number(prompt('Digite um número: '));

while (n >= 1) {
    console.log(n);
    n--;
}