// AULA 8 - ENCONTRO - 16 DE JUNHO DE 2021 - OBJETOS LITERAIS

/* EXERCÍCIO 1: Defina um novo objeto ‘conta’ que contenha as seguintes propriedades:
Número de conta
Saldo
Nome do Titular */

/* let conta = {
    numeroConta: 12345,
    saldo: "R$ 2000.00",
    nomeTitular: "José das Couves"
};

console.log(conta.saldo);
console.log(conta.numeroConta);
console.log(conta.nomeTitular); */

/* Crie um método chamado ‘depósito’ que tem a quantidade de dinheiro como parâmetro de entrada. Ao fazer um depósito, a quantia em dinheiro deve ser adicionada ao saldo existente. O método também deve imprimir na tela o tipo de transação realizada e o novo saldo. */

/* let conta = {
    numeroConta: 12345,
    saldo: 2000,
    nomeTitular: "José das Couves",
    deposito: function (quatidadeDinheiro) {
        let novoSaldo = quatidadeDinheiro += this.saldo;
        console.log("Depósito realizado. Novo saldo: R$ " + novoSaldo)
    }
};
console.log(conta.numeroConta);
console.log(conta.nomeTitular);
console.log(conta.saldo);
console.log(conta.deposito(500)); */

/* Crie um novo método chamado saque, como o método de depósito, deve consistir em um parâmetro numérico que será a quantia de dinheiro que queremos sacar. Esta quantia será subtraída do saldo existente. Caso o valor do saque seja superior ao saldo disponível, deve-se imprimir na tela a mensagem “Fundos Insuficientes”, caso contrário deve-se imprimir o tipo de transação realizada e o novo saldo. */