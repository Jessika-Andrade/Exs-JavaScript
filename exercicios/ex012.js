/* Você vai criar uma calculadora simples de IMC (Índice de Massa Corporal). A fórmula do IMC é:
- Peça ao usuário para informar o peso (em kg) e a altura (em metros).
- Calcule o IMC utilizando a fórmula acima.
- Exiba o IMC na tela com 2 casas decimais.
- Classifique o IMC de acordo com os seguintes critérios:
- Abaixo de 18,5: Abaixo do peso
- Entre 18,5 e 24,9: Peso normal
- Entre 25,0 e 29,9: Sobrepeso
- Acima de 30,0: Obesidade */

let peso = parseFloat(prompt('Digite seu peso: '));
let altura = parseFloat(prompt('Digite sua altura: '));
let imc = peso / (altura * altura);

console.log(`O IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('ABAIXO DO PESO');
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('PESO NORMAL');
} else if (imc >= 25.0 && imc < 29.9) {
    console.log('SOBREPESO!');
} else {
    console.log('OBESIDADE!');
}