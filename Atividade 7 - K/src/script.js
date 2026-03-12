// Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.


let valorReal = parseFloat(prompt("Qual a quantidade de reais (R$) disponível: "));
let valorCotacao = parseFloat(prompt("Qual o valor da cotação do dólar (US$): "));

let valorEmDolar = (valorReal / valorCotacao);

alert(`
    O valor de R$${valorReal},00 em dolar é: U$${valorEmDolar}.00;
`);