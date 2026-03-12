// Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.


let valorDolar = parseFloat(prompt("Qual a quantidade de dólar (US$) disponível: "));
let valorCotacao = parseFloat(prompt("Qual o valor da cotação do dólar (US$) para Real (R$): "));

let valorEmReal = (valorCotacao * valorDolar);

alert(`
    O valor de US$${valorDolar} em Real é: R$${valorEmReal},00;
`)