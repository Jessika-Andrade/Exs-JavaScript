/* Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO. */ 

let valor1 = prompt('Digite o primeiro valor lógico: ').toLowerCase() === "true";
let valor2 = prompt('Digite o segundo valor lógico: ').toLowerCase() === "true";

if (valor1 === true && valor2 === true) {
    console.log('Ambos os valores são VERDADEIROS!');
} else if (valor1 === false && valor2 === false) {
    console.log('Ambos os valores são FALSOS!');
} else {
    console.log('Um valor é falso e o outro é verdadeiro');
}