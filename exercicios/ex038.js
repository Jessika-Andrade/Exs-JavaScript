/* Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse 
usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20). */

let salarioMinimo = 1293.20;
let salarioUsuario = Number(prompt('Digite o seu salário: '));
let totalSalarios = salarioUsuario / salarioMinimo;

console.log(`O usuário recebe ${totalSalarios.toFixed(2)} salários mínimos`);

