let corAzul = document.getElementsByClassName("color")[3];
corAzul.style.backgroundColor = "blue";

let corVermelha = document.getElementsByClassName("color")[1];
corVermelha.style.backgroundColor = "red";

let corAmarela = document.getElementsByClassName("color")[2];
corAmarela.style.backgroundColor = "yellow";

let corPreta = document.getElementsByClassName("color")[0];
corPreta.style.backgroundColor = "black";

const pixelBoard = document.querySelector("#pixel-board");

// function gerarQuadro(tamanho) {
//     for (let linha = 0; linha < tamanho; linha += 1) {
//         const quadroPixel = document.createElement("div");
//         quadroPixel.className = "pixel";
//         pixelBoard.appendChild(quadroPixel);
//         for (let coluna = 0; coluna < tamanho; coluna += 1) {
//         const pixel = document.createElement("div");
//         pixel.className = "pixel";
//         quadroPixel.appendChild(pixel);
//         }
//     }
// }

// gerarQuadro(5); nao consegui terminar de implementar o correto funcionamento da função, por isso resolvi deixar o codigo comentado e resolvi estruturar os pixels no proprio HTML.

