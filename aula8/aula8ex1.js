// Exercício "Meu cardápio" - Microdesafios Objetos e Funções Construtoras

function Restaurante (nome, cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;
    function entrada () {
        return "Olá, bem-vindo ao " + nome + "! No menu do dia, temos " + cardapio.join(", ")
    };
    return entrada();
};

console.log(Restaurante("Beira-Mar", ["Casquinha de siri", "Pintado na brasa com arroz", "Creme de papaya", "Café"]));
console.log(Restaurante("Le Chef", ["Salada gourmet","Boef Bourgognon", "Crême Brulée", "Vinho tinto"]));
console.log(Restaurante("Esquina Chique", ["Salada de alface com tomate", "Arroz", "Feijão", "Linguiça", "Fritas", "Água com gás"]));
