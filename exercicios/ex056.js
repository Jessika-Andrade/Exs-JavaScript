/* Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, distância percorrida e a quantidade de litros utilizados para fazer a viagem.
Fórmula: distância = tempo x velocidade.
litros usados = distância / 12. */


let tempo = Number(prompt('Digite o tempo de viagem: '));
let velocidade = Number(prompt('Digite a velocidade média da viagem: '));

let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;

console.log(`Velocidade média: ${velocidade} km/h`);
console.log(`Tempo gasto: ${tempo} horas`);
console.log(`Distância percorrida: ${distancia} km`);
console.log(`Litros de combustível usados: ${litrosUsados.toFixed(2)} litros`);