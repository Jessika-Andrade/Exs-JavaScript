/* Você foi contratado para criar um sistema simples de verificação de acesso a um clube VIP. As regras para entrada são as seguintes:
- A pessoa deve ter pelo menos 18 anos.
- Se a pessoa for membro VIP, pode entrar independentemente da idade.
- Se a pessoa não tiver um convite, não pode entrar, a menos que seja membro VIP.
Escreva um código em JavaScript que receba as variáveis idade, membroVIP e temConvite e determine se a pessoa pode entrar no clube. A saída deve ser true se puder entrar e false caso contrário. */

let idade = Number(prompt('Digite a sua idade: '));
let membroVip = prompt('Você é membro VIP? [SIM / NÃO] ').toLowerCase() === "sim";
let temConvite = prompt('Você tem convite? [SIM / NÃO] ').toLowerCase() === "sim";

let podeEntrar = membroVip || (idade >= 18 && temConvite);

console.log(podeEntrar);






