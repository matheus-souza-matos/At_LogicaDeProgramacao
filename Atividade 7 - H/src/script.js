// Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME <- COMPRIMENTO * LARGURA * ALTURA.

let comprimentoCx = parseFloat(prompt("Qual o comprimento da caixa?"));
let larguraCx = parseFloat(prompt("Qual a largura da caixa?"));
let alturaCx = parseFloat(prompt("Qual a altura da caixa?"));

// Condição criada para verificar se a caixa é ou não retangular
if (comprimentoCx == larguraCx) {
    alert("A caixa não é retangular!");
    location.reload(); // Recarrega a página caso a condição IF seja veradeira
}else { 
    let volume = comprimentoCx * larguraCx * alturaCx; // caso meu IF seja falso, ele retornará o volume da cx
    alert(`O volume da caixa retangular é: ${volume};`);
}