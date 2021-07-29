// Teste de RECURSIVIDADE

function incrementar (num) {
    console.log(num);
    num++;
    if (num<=20) {
        incrementar(num);
    }
};
incrementar(0);
