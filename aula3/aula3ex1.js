/* // Microdesafio - Etapa I

// Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas 
// e calcule o IMC do usuário (peso / altura2).
// Em seguida, execute a função testando diferentes valores.

function calcularIndiceDeMassaCorporal(peso, altura) {
    let alturaM = altura/100;
    return peso / Math.pow(alturaM, 2);
}

console.log(calcularIndiceDeMassaCorporal(49, 160));
console.log(calcularIndiceDeMassaCorporal(58, 170));
console.log(calcularIndiceDeMassaCorporal(75, 170));

// 2) Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:
// Soma;
// Subtração;
// Multiplicação;
// Divisão.
// As 4 funções deverão receber dois parâmetros e retornar o resultado da operação matemática correspondente.

let soma = function (n1, n2) {
    return n1 + n2;
}

let subtracao = function (n1, n2) {
    return n1 - n2;
}

let multiplicacao = function (n1, n2) {
    return n1 * n2;
}

let divisao = function (n1, n2) {
    return n1 / n2;
}

console.log(soma(8, 2));
console.log(subtracao(8, 2));
console.log(multiplicacao(8, 2));
console.log(divisao(8, 2));

// 3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazerGol que 
// incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem 
// “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, 
// teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador 
// e o preço do jogador no mercado.  */

let nomeJogador = "CR7";
let golsJogador = 2;
let precoEmDolares = 2000;

function fazerGol (numGols) {
    console.log(++golsJogador);
    console.log("GOL!!!!!!!!!");
    console.log(precoEmDolares += 10000);
    
}    

fazerGol(golsJogador);
fazerGol(golsJogador);
fazerGol(golsJogador);
fazerGol(golsJogador);

// Porra, demorei quase 1 hora pra resolver essa merda! ¬¬' 

// 4) Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida)
// que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10%
// a mais por ano em comparação com o valor atual.

function hatTrick (numGols) {
    fazerGol(golsJogador);
    fazerGol(golsJogador);
    fazerGol(golsJogador);
    console.log("4)" + (precoEmDolares += precoEmDolares * 0.1)); 
} // Esperando receber resolução dos colegas, não consegui fazer! T_T

hatTrick(3);