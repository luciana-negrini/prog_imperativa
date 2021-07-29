/* MICRODESAFIO - PASSO 1:
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */
const Aluno = require('./aluno');
let aluno = require ('./aluno');
console.log(aluno); 

/* let aluno1 = {
    nome: 'Luciana',
    faltasQtd: 2,
    notas: [9, 8, 3, 7, 9]
}; */


/* MICRO DESAFIOS - PASSO 2:
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */
let aluno2 = new Aluno ('Jaiana', 2, [9, 8, 3, 7, 9]);

console.log(aluno2);

/* MICRO DESAFIO - PASSO 3:

Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */

/* MICRO DESAFIO - PASSO 4:

	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */