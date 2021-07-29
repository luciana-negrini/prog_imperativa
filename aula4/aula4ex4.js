// Exercício 2 “Pode Subir” - ENCONTRO - Microdesafio

/* 2) Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso 
ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
Em caso de impedimento, exiba a mensagem: “Acesso negado.”
 */
function podeSubir (altura, acompanhada) {
    if (altura >= 1.40 && altura <= 2) {
        console.log("Acesso autorizado.");
    }
    else if (altura < 1.40 && altura >= 1.2 && acompanhada == false) {
        console.log("Acesso autorizado somente com acompanhante");
    }
    else {
        console.log("Acesso negado");
    }
}
podeSubir (1.1, true);