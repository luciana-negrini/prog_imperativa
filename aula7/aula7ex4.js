// ENCONTRO - 14/JUNHO/2021 - ARROW FUNCTIONS COM PARÂMETROS

    function fizzBuzz (num1, num2) {
        for (i=0; i<=100; i++) {
            return i
        };
        let inteiro = i;
        let multiploA = (num1, inteiro) => num1 * inteiro;
        let multiploB = (num2, inteiro) => num2 * inteiro;
        if (multiploA/num1 == inteiro) { 
            console.log("Fizz")
            }
        else if (multiploB/num2 == inteiro) {
            console.log("Buzz")
            }
        else if (inteiro == multiploA/num1 && inteiro == multiploB/num2) {
            console.log("FizzBuzz")
            }
        else {console.log(inteiro)
            };
    }
