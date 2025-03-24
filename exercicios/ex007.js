/* Crie um programa que verifique se uma palavra ou frase é palíndroma. Uma palavra ou frase é considerada palíndroma quando ela pode ser lida da mesma forma de trás para frente.
- O programa deve ignorar espaços e considerar apenas letras.
- Se for uma palavra ou frase palíndroma, exiba: "A palavra/frase é um palíndromo!".
- Caso contrário, exiba: "A palavra/frase não é um palíndromo.". */

let palavra = prompt('Digite uma palavra: ').toLowerCase().replace(/ /g, '');
let palavraInvertida = palavra.split('').reverse().join('');

if (palavra === palavraInvertida) {
    console.log(`A palavra ${palavra} é palíndroma`);
} else {
    console.log(`A palavra ${palavra} não é palíndroma`);
}
