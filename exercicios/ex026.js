/* 1. Abrir a porta do carro.
2. Entrar no carro.
3. Ligar o carro.
4. Abrir o portão da garagem.
5. Engatar a marcha ré.
6. Sair com o carro da garagem.
7. Fechar o portão.
8. Engatar a primeira marcha.
9. Dirigir ao destino */

let portaCarro = prompt('A porta do carro está aberta? ').toLowerCase() === "sim";

if (portaCarro) {
    console.log('Entre no carro!');

    let entrouCarro = prompt('Entrou no carro? ').toLowerCase() === "sim";

    if (entrouCarro) {
        console.log('Ligue o carro!');

        let ligouCarro = prompt('Ligou o carro? ').toLowerCase() === "sim";

        if (ligouCarro) {
            console.log('Abra o portão da garagem!');

            let portaoGaragem = prompt('O portão da garagem está aberto? ').toLowerCase() === "sim";

            if (portaoGaragem) {
                console.log('Engate a marcha ré');

                let marchaRe = prompt('Engatou a marcha ré?').toLowerCase() === "sim";

                if (marchaRe) {
                    console.log('Saia com o carro da garagem!');

                    let saiuCarro = prompt('Você saiu com o carro da garagem? ').toLowerCase() === "sim";

                    if (saiuCarro) {
                        console.log('Feche o portão!');
                    
                        let fechouPortao = prompt('Você fechou o portão? ').toLowerCase() === "sim";

                        if (fechouPortao) {
                            console.log('Engate a primeira marcha!');

                            let primeiraMarcha = prompt('Você engatou a primeira marcha? ').toLowerCase() === "sim";

                            if (primeiraMarcha) {
                                console.log('Dirija ao seu destino!');

                                let destino = prompt('Você chegou ao seu destino? '). toLowerCase() === "sim";
                                
                                if (destino) {
                                    console.log('Parabéns! Você chegou ao seu destino!');
                                } else {
                                    console.log('Você não chegou ao seu destino!');
                                }

                            } else {
                                console.log('Você não engatou a primeira marcha!');
                            }

                        } else {
                            console.log('Você não fechou o portão!');
                        }

                    } else {
                        console.log('Você não saiu com o carro da garagem!');
                    }

                } else {
                    console.log('Você não engatou a marcha ré!');
                }

            } else {
                console.log('Você não abriu o portão da garagem!');
            }

        } else {
            console.log('Você não ligou o carro!');
        }

    } else {
        console.log('Você não entrou no carro!');
    }

} else {
    console.log('A porta está fechada. Não é possível entrar.')
}