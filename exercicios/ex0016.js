// Peça para o usuário digitar dois números e mostre qual é o maior.

let n1 = Number(prompt('Digite um número: '));
let n2 = Number(prompt('Digite outro número: '));

if (n1 > n2) {
    console.log(`${n1} é maior que ${n2}`);
} else if (n2 > n1) {
    console.log(`${n2} é maior que ${n1}`);
} else {
    console.log('Os números são iguais!');
}