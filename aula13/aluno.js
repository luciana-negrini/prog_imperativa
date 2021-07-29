function Aluno (nome, faltasQtd, notas) {
    this.nome = nome;
    this.faltasQtd = faltasQtd;
    this.notas = notas;
    this.media = 0;
    this.calcularMedia = function (notas) {
        let somaNota = 0;
        for (let i = 0; i < this.notas.lenght; i++){
            let somaNotas =+ this.notas[i];
        };
        this.media = somaNota/this.notas.lenght;
        return this.media;
    }
};



module.exports = Aluno;

