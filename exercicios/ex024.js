/* 1. O carro está na garagem ou na frente da casa.
2. O carro não está na frente da casa.
Considerando que as armações 1 e 2 são verdadeiras, podemos deduzir
que:
3. O carro está na garagem.*/

let estaGaragem = prompt('O carro está na garagem? ').toLowerCase() === "sim";
let estaNaFrente = prompt('O carro está na frente da casa? ').toLowerCase() === "sim";

// Se o carro está na garagem OU na frente da casa E o carro não está na frente da casa
if ((estaGaragem || estaNaFrente) && !estaNaFrente) {
    console.log('O carro está na garagem');
} else {
    console.log('O está em frente a casa.');
}