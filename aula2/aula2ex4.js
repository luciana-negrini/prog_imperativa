// Exercício de IMC

// Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, você será responsável por calcular 
// o Índice de Massa Corporal de cada registro: [tabela no PG]

// Quais são as variáveis? Quais são as constantes? De que tipo são? Qual variável poderia armazenar o valor null 
// segundo estes dados?

// ** RESPOSTA: as variáveis são: nome, sobrenome, idade, peso, altura, plano, 
// respectivamente dos tipos string, string, number, number, number, string. O que pode armazenar o valor null é o Plano.

/* O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura^2 (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 
Você deverá criar 6 variáveis:
Nome
Idade
Peso
Altura
Plano (só nos interessa saber se TEM ou NÃO TEM)
Índice de Massa Corporal (IMC) */
let primeiroNome;
let sobrenome;
let nome;
let idade;
let peso;
let altura;
let plano;
let imc;

// O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem. 
// Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.
primeiroNome = "Carlos";
sobrenome = "de Souza";
nome = primeiroNome + " " + sobrenome;
idade = 28;
peso = 80.1;
altura = 1.76;
imc = peso / (Math.pow(altura, 2))
plano = true;

console.log(nome + ", aos " + idade + " anos, o seu índice de massa corporal é de " + imc + ". Verificamos se você possui alguma modalidade de plano conosco, e a resposta é: " + plano + ".")