/* Você vai criar um programa que recomenda a roupa ideal com base no clima e se a pessoa tem um guarda-chuva.
Se estiver chovendo e a pessoa tiver guarda-chuva, exiba: "Leve um casaco, mas você está protegido da chuva!".
Se estiver chovendo e a pessoa não tiver guarda-chuva, exiba: "Pegue um casaco e se proteja! Vai chover!".
Se não estiver chovendo, mas estiver frio, exiba: "Está frio! Vista um casaco.".
Se não estiver chovendo e não estiver frio, exiba: "O clima está agradável! Vista o que quiser.". */

let chovendo = prompt('Está chovendo? ').toLowerCase() === "sim";
let guardaChuva = prompt('Você tem guarda-chuva? ').toLowerCase() === "sim";
let frio = prompt('Está frio? ').toLowerCase() === "sim";

if (chovendo && guardaChuva) {
    console.log('Leve um casaco, mas você está protegido da chuva!');
} else if (chovendo) {
    console.log('Pegue um casaco e se proteja! Vai chover!');
} else if (frio) {
    console.log('Está frio. Vista um casaco!');
} else {
    console.log('O clima está agradável! Vista o que quiser.');
}