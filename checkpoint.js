
// Menu de opções e respectivos tempos:
let opcoesMenu = ["Pipoca", "Macarrão", "Carne", "Feijão", "Brigadeiro"]
let temposPadrao = [10, 8, 15, 12, 8]
for (i=0; i<=4; i++) {
    temposPadrao[i];
    for (i=0; i<=4; i++) {
        console.log(i + 1 + " - " + opcoesMenu[i] + " - " + temposPadrao[i] + " segundos (padrão)");
    }
}
// Validar ou invalidar opções do menu:
switch (opcoesMenu) {
    case "Pipoca" :
    case "Macarrão" :
    case "Carne" :
    case "Feijão" :
    case "Brigadeiro" :
        console.log("Aguarde");
        break;
    default :
        console.log("Erro: prato inexistente.");
}
// Mensagem acerca do tempo escolhido:
let tempoInformado;

If (tempoInformado > (2*temposPadrao) {
    console.log("Xi!, a comida queimou!!")
}
else if (tempoInformado < temposPadrao) {
    console.log("Tempo insuficiente.")
}
else if (tempoInformado >= 3* temposPadrao) {
    console.log("Kabumm!")
}
else {
    console.log("Prato pronto, bom apetite!!!")
}


