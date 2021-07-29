//Teste de escopo local:

function ola() {
    let bemVindo = "Olá, como vai?";
    return bemVindo;
}

console.log(bemVindo) // Não é possível usar a variável com escopo local fora do corpo da função!! 
                        // Deu esse erro: ReferenceError: bemVindo is not defined

// Outro teste de escopo local: agora imprimindo a função em vez da variável com escopo local:

function ola() {
    let bemVindo = "Olá, como vai?";
    return bemVindo;
}

console.log(ola());
