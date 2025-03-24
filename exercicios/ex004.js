/* Escreva um código que pergunte ao usuário se ele está cansado e se ele está com sono.
- Se ele estiver cansado e com sono, exiba "Vá descansar!".
- Se ele estiver cansado, mas não com sono, exiba "Talvez um café ajude!".
- Se ele não estiver cansado, mas estiver com sono, exiba "Tente relaxar um pouco!".
- Se ele não estiver cansado nem com sono, exiba "Ótimo! Continue seu dia!". */

let cansado = prompt('Você está cansado? ').toLowerCase() === "sim";
let sono = prompt('Você está com sono? ').toLowerCase() === "sim";

if (cansado && sono) {
    console.log('Vá descansar!');
} else if (cansado) {
    console.log('Talvez um café ajude!');
} else if (sono) {
    console.log('Tente relaxar um pouco!');
} else {
    console.log('Ótimo! Continue seu dia!');
}