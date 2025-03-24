/* Peça para o usuário digitar dois números e depois mostre as operações de soma, subtração, multiplicação e divisão desses dois números. */

let n1 = Number(prompt('Digite um número: '));
let n2 = Number(prompt('Digite outra número: '));
let soma = n1 + n2;
let sub = n1 - n2;
let multi = n1 * n2;
let divi = n2 !== 0 ? n1 / n2 : "Não é possível dividir por zero!";

console.log(`${n1} + ${n2} = ${soma}`);
console.log(`${n1} - ${n2} = ${sub}`);
console.log(`${n1} * ${n2} = ${multi}`);
console.log(`${n1} / ${n2} = ${divi}`);