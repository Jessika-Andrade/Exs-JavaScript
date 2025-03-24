/*Você está desenvolvendo um sistema para um estacionamento que permite a entrada de carros sob certas condições:
Se o carro for elétrico, pode entrar gratuitamente.
Se o motorista tiver um passe mensal, pode entrar gratuitamente.
Se o carro não for elétrico e o motorista não tiver um passe mensal, ele só pode entrar se houver vagas disponíveis.
Se não houver vagas, o carro não pode entrar.
O código deve imprimir "Entrada permitida!" se o carro puder entrar, e "Entrada negada!" caso contrário.
 */ 

let carroEletrico = prompt('Seu carro é elétrico? [SIM / NÃO] ').toLowerCase() === "sim";
let passeMensal = prompt('Você possui Passe Mensal? [SIM / NÃO] ').toLowerCase() === "sim";
let vagasDisponiveis = prompt('Tem vaga disponível? [SIM / NÃO] ').toLowerCase() === "sim";

let acesso = carroEletrico || passeMensal || (vagasDisponiveis && !carroEletrico && !passeMensal);

if (acesso) {
    console.log('Acesso permitido!');
} else {
    console.log('Acesso negado!');
}
