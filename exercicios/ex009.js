/* Crie um programa onde o computador escolhe um número aleatório entre 1 e 10, e o usuário precisa adivinhar qual é esse número.
- O programa deve gerar um número aleatório entre 1 e 10.
- O usuário deve tentar adivinhar esse número.
- O programa deve informar se o palpite do usuário está correto ou errado.
Se o palpite estiver errado, o usuário pode continuar tentando até acertar. */

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let chute = Number(prompt('Digite um número de 1 a 10: '));

while (numeroAleatorio != chute) {
    console.log('INCORRETO! TENTE NOVAMENTE MAIS TARDE!');
    chute = Number(prompt('Digite um número de 1 a 10: '));
}

console.log(`O número aleatório é ${numeroAleatorio}. ACERTOU!`);