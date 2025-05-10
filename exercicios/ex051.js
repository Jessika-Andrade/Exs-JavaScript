/* Faça um algoritmo que imprima na tela a tabuada de 1 até 10. */

for (let i = 1; i <= 10; i++){
    console.log(`Tabuada do ${i}`);
    
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} X ${j} = ${i * j}`);
        }
        
    console.log('----------------------------');
}