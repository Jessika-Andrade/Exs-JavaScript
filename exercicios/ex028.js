/* você precisa calcular o número total de horas de
uma viagem, expressa em dias e horas. Uma viagem para Florianópolis
dura 2 dias e 5 horas, por exemplo. Qual é a duração total dessa viagem
em número de horas?
Para resolver esse problema, precisamos pegar o número de dias,
multiplicar por 24 (já que um dia tem 24 horas) e somar com o número de
horas.
 */

let dias = Number(prompt('Quantos dias? '));
let horasExtras = Number(prompt('Quantas horas além dos dias? '));

let horasTotais = (dias * 24) + horasExtras;

console.log(`O número de horas foi ${horasTotais}`);

