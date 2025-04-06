/* Você tem 3 amigos e precisa somar a idade dos 2 amigos que possuem as
maiores idades. Como resolver esse problema? Você pode:
1. Descobrir a maior idade.
2. Descobrir a segunda maior idade.
3. Somar as duas idades maiores. */ 

let idades = [
    Number(prompt('Idade do amigo 1: ')),
    Number(prompt('Idade do amigo 2: ')),
    Number(prompt('Idade do amigo 3: '))
];

idades.sort((a, b) => b - a);

let soma = idades[0] + idades[1];

console.log(`A maior idade é ${idades[0]} e a segunda maior é ${idades[1]}`);
console.log(`A soma de ${idades[0]} e ${idades[1]} é ${soma}`);