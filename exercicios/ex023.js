/* Peça ao usuário para digitar um número e verifique se ele é um número perfeito.
- Número perfeito: É um número cuja soma de seus divisores (exceto ele mesmo) é igual ao próprio número. */ 

let numero = Number(prompt('Digite um número: '));
let soma = 0;

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        soma += i;
    }
}

if (soma === numero) {
    console.log(`O número ${numero} é perfeito`);
} else {
    console.log(`O número ${numero} não é perfeito`);
}


