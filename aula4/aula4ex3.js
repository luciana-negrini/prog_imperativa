// Exercício 1 “Pode Subir” - ENCONTRO - Microdesafio

/* Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar 
no brinquedo.
Crie uma função podeSubir() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.
Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada. */

function podeSubir (altura, acompanhada) {
    if (altura >=1.4 && altura <= 2.0) {
        console.log("TRUE");
    }
    else if (altura <1.4 && altura >= 1.2 && acompanhada == true) {
        console.log("TRUE");
    }
    else {
    console.log("FALSE");
    }
}
podeSubir (1.1, true);

/* Na primeira tentativa, fiz da seguinte forma (mas depois entendi que poderia dispensar o segundo else if (linha 35)):

function podeSubir (altura, acompanhada) {
    if (altura >= 1.40 && altura <= 2) {
        console.log("Pode subir, dispensa acompanhante.");
    }
    else if (altura < 1.40 && altura >= 1.2 && acompanhada == true) {
        console.log("Pode subir, está acompanhada.");
    }
    else if (altura < 1.40 && altura >= 1.2 && acompanhada == false) {
        console.log("Não pode subir, necessita acompanhante.");
    }
    else {
        console.log("Não pode subir, nem acompanhada");
    }
} */