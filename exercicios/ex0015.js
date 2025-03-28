/* Que tal um programa que verifica se um ano é bissexto?
- Peça para o usuário inserir um ano.
- Verifique se ele é bissexto usando as seguintes regras:
- Um ano é bissexto se for divisível por 4.
- Mas, se for divisível por 100, só será bissexto se também for divisível por 400. */

let ano = Number(prompt('Digite um ano: '));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto`);
} else {
    console.log(`${ano} não é um ano bissexto`);
}


