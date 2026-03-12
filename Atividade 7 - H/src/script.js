// Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME <- COMPRIMENTO * LARGURA * ALTURA.

let comprimentoCx = parseFloat(prompt("Qual o comprimento da caixa?"));
let larguraCx = parseFloat(prompt("Qual a largura da caixa?"));
let alturaCx = parseFloat(prompt("Qual a altura da caixa?"));

if (comprimentoCx == larguraCx) {
    alert("A caixa não é retangular!");
    location.reload();
}else {
    let volume = comprimentoCx * larguraCx * alturaCx;
    alert(`O volume da caixa retangular é: ${volume};`);
}