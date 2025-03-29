/* Peça ao usuário para digitar um número. Depois, exiba todos os números pares de 0 até o número digitado.*/ 

let numero = Number(prompt('Digite um número: '));
let contador = 0;

while (contador <= numero) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
    contador++;
}
