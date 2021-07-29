// Exercício “Lista de Compras” - Microdesafio
/* Crie um array que contenha nomes de produtos para compra.
Após isso, exiba no console os resultados das funções relacionadas aos arrays,
que são: Join, Pop, Push, Shift e Unshift.
Também se deve escrever com suas palavras, o que cada função realiza.
Seguem abaixo alguns exemplos.
console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN) */
let listaDeCompras = ["shampoo", "sabonete", "cotonete", "condicionador", "algodão", "fio dental"];

// Join
console.log("Resultado do join(); : " + listaDeCompras.join());

// Pop
let ultimoItemExcluido = console.log("Ultimo item excluído: " + listaDeCompras.pop());
console.log("Lista menos último elemento: " + listaDeCompras);

// Push
listaDeCompras.push("colírio", "creme dental");
console.log("Lista mais dois itens ao final: " + listaDeCompras);

// Shift
let primeiroItemExcluido = console.log("Primeiro item excluído: " + listaDeCompras.shift());
console.log("Lista menos primeiro elemento: " + listaDeCompras);

// Unshift.
listaDeCompras.unshift("cenoura", "tomate");
console.log("Lista mais dois itens ao início: " + listaDeCompras);
