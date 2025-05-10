/* Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Sara seja maior que Francisco. */ 


let alturaFrancisco = 1.50;
let alturaSara = 1.10;
let anos = 0;

while (alturaSara <= alturaFrancisco) {
    alturaFrancisco += 0.02;
    alturaSara += 0.03;
    anos++
}

console.log(`Serão necessários ${anos} anos para que Sara fique mais alta que Francisco`);
