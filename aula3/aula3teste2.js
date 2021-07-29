function bemVindo (nome = "Caro", sobrenome = "Visitante") {
    return "Olá, " + nome + " " + sobrenome + "!";
}
console.log(bemVindo("Luciana", "Negrini"));

// Teste sem parâmetros, com o valor default definido:

console.log(bemVindo());

// Teste com armazenamento do valor retornado em uma variável:

function bemVindo (nome = "Caro", sobrenome = "Visitante") {
    return "Olá, " + nome + " " + sobrenome + "!";
}

let primeiroVisitante = bemVindo("Luciana", "Negrini");
console.log(primeiroVisitante);