// Exercício “Praticando com Loops”

/* 1) Repetir como um papagaio
Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem 
“Olá mundo”. */
for (i=1; i<=5; i++) {
    console.log("Ex.1) " + i + " - Olá mundo");
}

/* 2) Contando números ímpares
Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. 
Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.*/
for (i=1; i<=10; i+=2) {
    console.log("Ex.2) " + i);
}

/* 3) Criando a tabuada
Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for). */
let numero = 8;
for (i=0; i<=10; i++) {
    let resultado = numero*i;
    console.log(numero + " x " + i + " = " + resultado)
}
