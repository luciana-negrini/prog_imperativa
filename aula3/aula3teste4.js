// Teste de escopo global, declarando função fora da variável:

let bemVindo = "Olá, como vai?";

function ola() {
    return bemVindo;
}

console.log(bemVindo);
console.log(ola());