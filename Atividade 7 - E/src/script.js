// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO).

let valorPrestacao = parseFloat(prompt("Qual o valor da prestação?"));
let taxa = parseFloat(prompt("Qual a porcentagem da taxa? (apenas números, sem a '%'"));
let tempo = parseFloat(prompt("Quanto tempo (em dias) de atraso?"));

let vPrestacaoAtraso = valorPrestacao + (valorPrestacao * taxa / 100) * tempo;

alert(`
    O valor da prestação de R$${valorPrestacao} com atraso de ${tempo} dias com taxa de ${taxa}%, é de:
    R$${vPrestacaoAtraso};
`);