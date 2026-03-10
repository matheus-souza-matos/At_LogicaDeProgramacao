// Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

let tempFahrenheit = parseInt(prompt("Digite a temperatura em Fahrenheit(°F):")); //Lê e armazena o que o usuário digitar
let valorCelsius = (tempFahrenheit - 32) * (5/9); //Fórmula que converte °F para °C com base no valor de "tempFahrenheit"

document.querySelector(".text").innerText = (`O valor de ${tempFahrenheit}°F em Celsius é ${valorCelsius}°C`); //Altera o valor do meu <p> através do seletor ".text" dentro do meu HTML para trazer a mensagem na página.