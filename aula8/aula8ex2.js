// AULA ASSÍNCRONA DE 16/JUNHO/2021 - SPREAD OPERATOR E PARÂMETRO REST

// Exercício 1: Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

let numerosPrimos = [2, 7, 11, 13];

let numeros = [...numerosPrimos, 4, 6, 8, 10];

console.log(numeros);

// EXERCÍCIO 2: Crie uma função mostrarNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.

function mostrarNumero(...params) {
    return Math.min(...params)
}
console.log(mostrarNumero(3, 6, 5, 7, 8, 9));