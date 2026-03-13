// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.


let numeroA = parseInt(prompt("Digite o primeiro valor: "));
let numeroB = parseInt(prompt("Digite o segundo valor: "));
let numeroC = parseInt(prompt("Digite o terceiro valor: "));
let numeroD = parseInt(prompt("Digite o quarto valor: "));

// Mostra a adição e seu resultado para o usuário - conceito da propriedade distributiva
alert(`
    //------ ADIÇÃO ------//
    ${numeroA} + ${numeroB} = ${numeroA + numeroB};
    ${numeroA} + ${numeroC} = ${numeroA + numeroC};
    ${numeroA} + ${numeroD} = ${numeroA + numeroD};
    ${numeroB} + ${numeroC} = ${numeroB + numeroC};
    ${numeroB} + ${numeroD} = ${numeroB + numeroD};
    ${numeroC} + ${numeroD} = ${numeroC + numeroD};
`);

// Mostra a multiplicação e seu resultado para o usuário - conceito da propriedade distributiva
alert(`
    //--- MULTIPLICAÇÃO ---//
    ${numeroA} x ${numeroB} = ${numeroA * numeroB};
    ${numeroA} x ${numeroC} = ${numeroA * numeroC};
    ${numeroA} x ${numeroD} = ${numeroA * numeroD};
    ${numeroB} x ${numeroC} = ${numeroB * numeroC};
    ${numeroB} x ${numeroD} = ${numeroB * numeroD};
    ${numeroC} x ${numeroD} = ${numeroC * numeroD};
`);