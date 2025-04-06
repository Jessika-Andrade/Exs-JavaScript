/* 1. Se chover, Silvana irá ao cinema.
2. Choveu.
Logo, novamente considerando que as armações 1 e 2 são verdadeiras,
podemos concluir que:
3. Silvana foi ao cinema. */

let seChover = prompt('Vai chover? ').toLowerCase() === "sim";

if (seChover) {
    console.log('Choveu. Portanto, Silvana foi ao cinema');
} else {
    console.log('Não choveu. Portanto, Silvana não foi ao cinema.');
}