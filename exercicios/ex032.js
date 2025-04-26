/* Elaborar um programa para uma loja, o qual leia o preço de um produto e
informe as opções de pagamento da loja. Calcule e informe o valor para
pagamento à vista com 10% de desconto e o valor em 3x.
Exemplo:
Preço R$: 60.00
À Vista R$: 54.00
Ou 3x de R$: 20.00
*/

let preco = Number(prompt('Digite o preço: '));
let aVista = preco - (preco * 0.10);
let parcelas = preco / 3;

console.log(`O valor do produto é R$${preco.toFixed(2)}. À vista, fica R$${aVista.toFixed(2)}. Parcelado fica 3x de R$${parcelas.toFixed(2)}`);