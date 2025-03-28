// Peça ao usuário para digitar um número e depois mostre a tabuada desse número de 1 a 10 utilizando for.

let n = Number(prompt('Digite um número: '));

for(let i = 1; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n * i}`);
}
