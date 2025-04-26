/* Elaborar um programa para uma pizzaria, o qual leia o valor total de
uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
pago por cliente.
Exemplo:
Valor da Conta R$: 90.00
Número de Clientes: 3
Valor por cliente R$: 30.00
*/

let valorConta = Number(prompt('Digite o valor da conta: '));
let numeroClientes = Number(prompt('Digite o número de clientes: '));
let valorCliente = valorConta / numeroClientes;

console.log(`O valor da conta foi: R$${valorConta.toFixed(2)} para ${numeroClientes} clientes. Sendo assim, fica R$${valorCliente.toFixed(2)} para cada.`)