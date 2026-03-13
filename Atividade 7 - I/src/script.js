// Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.

let numeroA = parseInt(prompt("Digite o primeiro numero inteiro: "));
let numeroB = parseInt(prompt("Digite o segundo numero inteiro: "));

let diferencaAB = numeroA - numeroB; //Descobre a diferença dos dois número e armazena em "diferencaAB"
let quadradoDiferenca = Math.pow(diferencaAB, 2); //Descobre o valor do quadrado de "diferencaAB" pelo método Math.pow

alert(`
    A diferença de ${numeroA} para ${numeroB} é: ${diferencaAB};
    O valor do quadrado dessa dirença (${diferencaAB}) é: ${quadradoDiferenca};    
`);