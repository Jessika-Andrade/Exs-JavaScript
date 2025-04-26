/* 1. Pegar uma caixa de fósforo.
2. Abrir a caixa de fósforo.
3. Vericar se tem palito. Se Sim:
3.1 Retirar um palito.
3.2 Fechar a caixa.
3.3 Riscar o palito.
3.4 Vericar se acendeu. Se Sim:
3.4.1 Ok! Processo Concluído.
3.5 Se não: Retornar ao passo?
4. Se não: Descartar a caixa e retornar ao passo 1. */

let caixaFosforo = prompt('Pegou a caixa de fósforo? ').toLowerCase() === "sim";

if (caixaFosforo) {
    console.log('Você pegou a caixa de fósforo!');

    let abrirCaixa = prompt('A caixa foi aberta? ').toLowerCase() === "sim";

    if (abrirCaixa) {
        console.log('A caixa foi aberta! ');
    
        let verificarPalito = prompt('Tem palito dentro da caixa? ').toLowerCase() === "sim";

        if (verificarPalito) {
            console.log('Tem palito dentro da caixa!');
        
            let retirarPalito = prompt('O palito foi retirado? ').toLowerCase() === "sim";

            if (retirarPalito) {
                console.log('O palito foi retirado!');
            
                let fecharCaixa = prompt('A caixa foi fechada? ').toLowerCase() === "sim";

                if (fecharCaixa) {
                    console.log('A caixa foi fechada!');
                
                    let riscarPalito = prompt('O palito foi riscado? ').toLowerCase() === "sim";

                    if (riscarPalito) {
                        console.log('O palito foi riscado!');
                    
                        let acendeu = prompt('O palito acendeu? ').toLowerCase() === "sim";

                        if (acendeu) {
                            console.log('Ok! Processo concluído!');
                        } else {
                            console.log('O palito não acendeu. Tente riscar outro palito.');
                        }
                    
                    } else {
                        console.log('O palito não foi riscado.');
                    }
                
                } else {
                    console.log('A caixa não foi fechada!');
                }
            
            } else {
                console.log('O palito não foi retirado.');
            }
        
        } else {
            console.log('Não tem palito dentro da caixa. Descartar e pegar outra.');
        }
    
    } else {
        console.log('A caixa não foi aberta! ');
    }

} else {
    console.log('Você não pegou a caixa de fósforo!');
}
