/* Peça ao usuário para digitar um número e conte de 1 até esse número usando WHILE */

let numero = Number(prompt('Digite um número: '));
let contador = 1;

while (contador <= numero) {
    console.log(contador);
    contador++
}