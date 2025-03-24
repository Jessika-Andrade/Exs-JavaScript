/* Crie um programa que peça um número ao usuário e exiba a tabuada desse número de 1 a 10.
- O programa deve pedir um número ao usuário.
- Deve exibir a tabuada desse número multiplicado de 1 a 10.
- O resultado deve ser exibido no console. */ 

let numero = Number(prompt('Digite um número: '));
let contador = 1;

while (contador <= 10) {
    let resultado = numero * contador;
    console.log(`${numero} X ${contador} = ${resultado}`);
    contador++;
}