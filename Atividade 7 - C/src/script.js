// Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume <- π * Raio2 * Altura

const raio = 4.5; //declaro o raio da lata
const altura = 16; //declaro a altura da lata

//Crio uma arrow function para retornar o resultado da fórmula
const calcVolume = (raio, altura) => {
    return Math.PI * Math.pow(raio, 2) * altura; 
}

document.querySelector(".volume").innerText = calcVolume(raio, altura).toFixed(2);

// "Math.pow(raio, 2)" eleva o raio ao quadrado;
// "Math.PI" me trás o valor de PI;
// "to.Fixed(2)" - mostra até duas casas decimais;