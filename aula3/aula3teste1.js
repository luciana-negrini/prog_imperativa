// Teste de função sem o "return": resultado undefined!!
function somar (a, b) {
    a + b
};
console.log(somar(2, 3));

// Teste de função com o "return": resutado OK!
function somar (a, b) {
    return a + b
};
console.log(somar(2, 3));