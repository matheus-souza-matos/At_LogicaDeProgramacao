// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados


let valorA = prompt("Digite o valor de A:"); // recebe o valor de A
let valorB = prompt("Digite o valor de B:"); // recebe o valor de B

let auxiliar; // variável vazia - usada para armazenar um valor (A ou B) para inversão

auxiliar = valorA; // auxiliar guarda o valor de A
valorA = valorB; // valor de A recebe o valor de B
valorB = auxiliar; // valor de B agora recebe o valor que era de A (que foi armazenado em auxiliar)

// trás os valores para a tela
alert(`
    Os valores ivertidos são:
    valor de A: ${valorA};
    valor de B: ${valorB};
`);
