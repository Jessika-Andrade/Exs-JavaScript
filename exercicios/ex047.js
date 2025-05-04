/* Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.
(Ex: 5 anos, 2 meses e 15 dias de vida) */

let anoNascimento = Number(prompt('Digite o ano que você nasceu: '));
let anoAtual = new Date().getFullYear();

let diasTotais = (anoAtual - anoNascimento) * 365;

let anos = Math.floor(diasTotais / 365);
let diasRestantes = diasTotais % 365;
let meses = Math.floor(diasRestantes / 30);
let dias = diasRestantes % 30;

console.log(`Você nasceu em ${anoNascimento}`);
console.log(`Você viveu aproximadamente ${anos} anos, ${meses} e ${dias} dias.`);

