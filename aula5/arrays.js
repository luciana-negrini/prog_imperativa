// AULA 5 EX. 3 - ENCONTRO - MICRODESAFIO SEGUNDA PARTE

/* O líder técnico da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
Criar um arquivo arrays.js que contenha o código: */

let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
// Verificamos se tudo funciona bem se solicitarmos o segundo elemento do array e for "clube da luta".
console.log(filmes[1]);

// No mesmo arquivo, coloque todos os elementos em letras MAIÚSCULAS utilizando  .toUpperCase() para cada elemento.
console.log(filmes[0].toUpperCase());
console.log(filmes[1].toUpperCase());
console.log(filmes[2].toUpperCase());
console.log(filmes[3].toUpperCase());
console.log(filmes[4].toUpperCase());

// Enquanto trabalhava no exercício 2, descobrimos que também há outro array no código, mas com filmes animados.
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];
// No mesmo arquivo, crie este array e uma função que adiciona cada elemento do array de desenhos animados (cartoons) 
// ao array de filmes. 
filmes.push(cartoons[0]);
filmes.push(cartoons[1]);
filmes.push(cartoons[2]);
filmes.push(cartoons[3]);
filmes.push(cartoons[4]);
console.log(filmes);

// Um dos desenvolvedores avisou que a última animação é na verdade um jogo, então remova esse último elemento do array 
// de desenhos animados (cartoons) antes de passá-los para os filmes.
cartoons.pop();
filmes.push(cartoons[0]);
filmes.push(cartoons[1]);
filmes.push(cartoons[2]);
filmes.push(cartoons[3]);
console.log(filmes);

// Por fim, eles nos enviam dois arrays com as avaliações feitas por diferentes usuários do mundo desses filmes, 
// da seguinte forma:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

/* Eles nos pedem para criar uma função que compare as notas e nos diga se elas são iguais ou diferentes. 
Eles confirmam que estão na respectiva ordem e que trazem apenas valores numéricos de 1 a 10.
Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções e testar seu funcionamento correto.
 */
let primeiraNota = asiaScores[0] == euroScores[0] ? "Iguais" : "Diferentes";
let segundaNota = asiaScores[1] == euroScores[1] ? "Iguais" : "Diferentes";
let terceiraNota = asiaScores[2] == euroScores[2] ? "Iguais" : "Diferentes";
let quartaNota = asiaScores[3] == euroScores[3] ? "Iguais" : "Diferentes";
let quintaNota = asiaScores[4] == euroScores[4] ? "Iguais" : "Diferentes";
let sextaNota = asiaScores[5] == euroScores[5] ? "Iguais" : "Diferentes";
let setimaNota = asiaScores[6] == euroScores[66] ? "Iguais" : "Diferentes";
let oitavaNota = asiaScores[7] == euroScores[7] ? "Iguais" : "Diferentes";

console.log(primeiraNota);
console.log(segundaNota);
console.log(terceiraNota);
console.log(quartaNota);
console.log(quintaNota);
console.log(sextaNota);
console.log(setimaNota);
console.log(oitavaNota);

