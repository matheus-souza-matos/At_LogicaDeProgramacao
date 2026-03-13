// Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA <- TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS <- DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.


let tempo = parseFloat(prompt("Qual o tempo (em horas) da viagem?"));
let vMedia = parseFloat(prompt("Qual velocidade média (em km/h) da viagem?")); 

let distancia = tempo * vMedia; // multiplica os valores "tempo" e "vMedia" e armazena na variável "distancia"
let litrosUsados = distancia / 12; // divide a distância pela média do carro e armazena o valor em "litrosUssados"


//trás para o usuário as informações solicitadas
alert(`
    Para um veículo de autonomia de 12km, o resultado foi:
    Velocidade Média: ${vMedia} km/h;
    Tempo da Viagem: ${tempo} hr(s);
    Distância Percorrida: ${distancia} km;
    Quantidade de Litros Usado: ${litrosUsados.toFixed(2)} L;
`);
