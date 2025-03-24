/* Você está desenvolvendo um sistema para controlar o acesso a um cinema. As regras para a entrada são as seguintes:
- Se a pessoa tiver menos de 12 anos, só pode entrar se estiver acompanhada de um responsável.
- Se a pessoa tiver entre 12 e 17 anos, pode entrar sozinha, mas só se o filme não for para maiores de 18.
- Se a pessoa tiver 18 anos ou mais, pode entrar em qualquer filme sem restrições.
O código deve imprimir "Entrada permitida!" se a pessoa puder assistir ao filme e "Entrada negada!" caso contrário. */


let idade = Number(prompt('Digite sua idade: '));
let acompanhado = prompt('Você está acompanhado? [SIM / NÃO] ').toLowerCase() === "sim";
let filme18 = prompt('O filme é maior +18? [SIM / NÃO] ').toLowerCase() === "sim";

if (idade < 12) {
    if (acompanhado) {
        console.log('Você está acompanhado! Entrada permitida.');
    } else {
        console.log('Entrada negada! Menores de 12 anos precisam estar acompanhados por responsáveis.');
    }
} else if (idade >= 12 && idade < 18) {
    if (filme18) {
        console.log('Entrada negada! Este filme é para maiores +18.');
    } else {
        console.log('Entrada permitida! Você pode assistir esse filmes na categoria permitida!');
    }
} else {
    console.log('Entrada permitida! Você pode assistir qualquer filme!');
}