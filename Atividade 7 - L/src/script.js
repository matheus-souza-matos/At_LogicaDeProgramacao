// Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let somaTotal = (valor1 ** 2) + (valor2 ** 2) + (valor3 ** 2 );

alert(`
    Primeiro Valor: ${valor1}; 
    Segundo Valor: ${valor2};
    Terceiro Valor: ${valor3};
    A soma dos quadrados dos 3 valores é:
    ${somaTotal}
`);