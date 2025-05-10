/* Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é equilátero (todos os lados são iguais), isósceles (dois lados iguais e um diferente) ou escaleno (todos os lados são diferentes). */

let lado1 = Number(prompt('Digite o primeiro valor: '));
let lado2 = Number(prompt('Digite o segundo valor: '));
let lado3 = Number(prompt('Digite o terceiro valor: '));

if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log('O triângulo é EQUILÁTERO!');
    } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
        console.log('O triângulo é ISÓSCELES!');
    } else {
        console.log('O triângulo é ESCALENO!');
    }
} else {
    console.log('Os valores informados são menores. Portanto, não é possível formar um triângulo!');
}
