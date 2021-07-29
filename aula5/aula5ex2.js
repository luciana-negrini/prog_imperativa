// Exercício Arrays - ENCONTRO

/* Em primeiro lugar, vamos praticar os comandos mais comuns e necessários:
Acesse elementos específicos de um array.*/
let meuArray = ["Luciana", 32, true, ["arquivista", "socióloga"]];
console.log(meuArray[3]);
/* Percorra um Array  e modifique cada um de seus elementos.*/
meuArray[0] = "Vanessa";
meuArray[1] = 30;
meuArray[2] = false;
meuArray[3] = ["profissional audiovisual", "diretora"];
console.log(meuArray);
/*Adicione elementos a um array.*/
meuArray.push("Brasileira");
console.log("2) " + meuArray);
meuArray.unshift("Turma 3");
console.log("3) " + meuArray);
/*Exclua elementos de um array.*/
meuArray.pop();
console.log("4) " + meuArray);
meuArray.shift();
console.log("5) " + meuArray);

/*Compare elementos de um array com elementos de outro array. 
 */