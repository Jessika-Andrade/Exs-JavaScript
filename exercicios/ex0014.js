/* Peça ao usuário para digitar uma letra e determine se ela é uma vogal ou uma consoante. */

let letra = prompt('Digite uma letra: ').toLowerCase();

if (letra.length !== 1 || !/[a-z]/.test(letra)) {
    console.log('Por favor, digite apenas uma única letra: ');
} else {
    let vogais = ["a", "e", "i", "o", "u"];
    if (vogais.includes(letra)) {
        console.log(`${letra} é uma vogal`);
    } else {
        console.log(`${letra} é uma consoante`);
    }
}

