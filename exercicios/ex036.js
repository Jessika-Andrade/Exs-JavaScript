/* Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, 
caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e
imprimir seu valor na tela. */

let valorA = parseInt(prompt('Digite o primeiro valor: '));
let valorB = parseInt(prompt('Digite o segundo valor: '));

let c

if (valorA === valorB) {
    c = valorA + valorB;
} else {
    c = valorA * valorB;
}

console.log(`O valor de C é ${c}`);



