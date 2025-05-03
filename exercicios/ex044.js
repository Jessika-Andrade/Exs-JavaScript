/* Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento
pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.
Tabela de Código de Condições de Pagamento
 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
 2 - À Vista no cartão de crédito, recebe 10% de desconto
 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10% */ 


 let valorProduto = Number(prompt('Digite o valor: ')); 
 let formaPagamento = Number(prompt('Qual será a forma de pagamento? 1 - Pix/Dinheiro; 2 - Crédito à vista; 3 - Crédito 2x sem juros; 4 - Crédito 3x ou mais com juros: '));
 let valorFinal;
 
 if (formaPagamento === 1) {
     valorFinal = valorProduto - (valorProduto * 0.15);
     console.log(`Pagamento à vista no Dinheiro ou Pix. Total com desconto: R$${valorFinal.toFixed(2)}`);
 } else if (formaPagamento === 2) {
     valorFinal = valorProduto - (valorProduto * 0.10);
     console.log(`Pagamento à vista no crédito. Total com desconto: R$${valorFinal.toFixed(2)}`);
 } else if (formaPagamento === 3) {
     valorFinal = valorProduto;
     console.log(`Pagamento em 2x no crédito. Total: ${valorFinal.toFixed(2)} (2x R$${(valorFinal / 2).toFixed(2)})`);
 } else if (formaPagamento === 4) {
    let parcelas = Number(prompt('Em quantas vezes deseja parcelar? (mínimo 3x): '));
    if (parcelas < 3) {
        console.log('Número de parcelas inválido. Deve ser 3 ou mais.');
    } else {
        valorFinal = valorProduto + (valorProduto * 0.10);
        let parcela = valorFinal / parcelas;
        console.log(`Pagamento em ${parcelas}x com juros. ${parcelas}x de R$${parcela.toFixed(2)}. Total: R$${valorFinal.toFixed(2)}`);
    }
} else {
    console.log('Forma de pagamento inválida.');
}