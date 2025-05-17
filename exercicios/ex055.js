/* Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações fornecidas serão: valor da hora aula, número de aulas lecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final. */

let valorHoraAula = Number(prompt('Digite o valor da hora aula: '));
let numeroAulas = Number(prompt('Quantas aulas foram lecionadas no mês? '));
let descontoINSS = Number(prompt('Porcentagem de desconto INSS: '));

let salarioBruto = valorHoraAula * numeroAulas;

let desconto = salarioBruto * (descontoINSS / 100)

let salarioLiquido = salarioBruto - desconto;

console.log(`Salário bruto: R$${salarioBruto.toFixed(2)}`);
console.log(`Percentual INSS: ${descontoINSS}. Desconto: R$${desconto.toFixed(2)}`);
console.log(`Salário líquido: R$${salarioLiquido.toFixed(2)}`);