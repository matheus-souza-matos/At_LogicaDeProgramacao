// Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let somaTotalValores = valor1 + valor2 + valor3; //Soma os 3 valores informados
let somaQuadradoTotal = somaTotalValores ** 2 //Descobre o valor do quadrado da soma dos 3 números

alert(`
    Primeiro Valor: ${valor1}; 
    Segundo Valor: ${valor2};
    Terceiro Valor: ${valor3};
    A soma dos 3 valores é: ${somaTotalValores}
    E o quadrado desse valor é: ${somaQuadradoTotal}
`);