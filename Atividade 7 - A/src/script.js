// Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.



let temperatura = parseInt(prompt("Digite a temperatura em Celsius(°C):")); //Lê e armazena o que o usuário digitar
let valorFahrenheit = (9 * temperatura + 160) / 5; //Fórmula que converte de °C para °F com base no valor de "temperatura"

document.querySelector(".text").innerText = (`O valor de ${temperatura}°C em Fahrenheit é ${valorFahrenheit}°F`); //Altera o valor do meu <p> através do seletor ".text" dentro do meu HTML para trazer a mensagem na página.
