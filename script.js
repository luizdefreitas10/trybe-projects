let corAzul = document.getElementsByClassName("color")[3];
corAzul.style.backgroundColor = "blue";

let corVermelha = document.getElementsByClassName("color")[1];
corVermelha.style.backgroundColor = "red";

let corAmarela = document.getElementsByClassName("color")[2];
corAmarela.style.backgroundColor = "yellow";

let corPreta = document.getElementsByClassName("color")[0];
corPreta.style.backgroundColor = "black";

const pixelBoard = document.querySelector("#pixel-board");

function loadPage() {
    alert("Página carregada.");
}

function gerarQuadro(tamanho) {
    for (let linha = 0; linha < tamanho; linha += 1) {
        const quadroPixel = document.createElement("div");
        // quadroPixel.className = "pixel";
        pixelBoard.appendChild(quadroPixel);
        for (let coluna = 0; coluna < tamanho; coluna += 1) {
            const pixel = document.createElement("div");
            pixel.className = "pixel";
            quadroPixel.appendChild(pixel);
        }
    }
}

function selectColor() {
    const color = document.querySelectorAll(".color");
    for (let i = 0; i < color.length; i += 1) {
        color[0].classList.add('selected');
        color[i].addEventListener('click', function (event) {
            const colorSelected = document.querySelector('.selected');
            colorSelected.classList.remove('selected');
            event.target.classList.add('selected');
        });
    }
}

function putColor() {
    const pixels = document.querySelectorAll(".pixel");
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener("click", function (event) {
            const selectedColor = document.querySelector(".selected").style.backgroundColor;
            event.target.style.backgroundColor = selectedColor;
        });
    }
}

function cleanButton() {
    const buttonClear = document.getElementById("clear-board");
    buttonClear.addEventListener("click", function (event) {
        const pixels = document.querySelectorAll(".pixel");
        for (let index = 0; index < pixels.length; index += 1) {
            const whiteningPixels = pixels[index];
            whiteningPixels.style.backgroundColor = "white";
        }
    });
}


function newSquare() {
    const vqvButton = document.getElementById("generate-board");
    vqvButton.addEventListener('click', function (event) {
        const inputInfo = document.getElementById('board-size');
        const pixels = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixels.length; index += 1) {
            const pixelIndex = pixels[index];
            pixelIndex.parentNode.removeChild(pixelIndex);
        }
        const inputValue = inputInfo.value;
        if (inputValue === '') {
            alert('Board inválido!')
            gerarQuadro(5)
            putColor();
        } else if (inputValue < 5) {
            alert('5 é o tamanho mínimo permitido.')
            gerarQuadro(5);
            putColor();
        } else if (inputValue > 50) {
            alert('50 é o tamanho máximo permitido.')
            gerarQuadro(50);
            putColor();
        } else {
            gerarQuadro(inputValue);
            putColor();
        }
    })
}

// referencias que ajudaram a criar a paleta de cores aleatoriamente: 
// https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript 
// https://www.youtube.com/watch?v=tUJvE4xfTgo - video explicando a criacao de cores aleatorias para o backgroundColor de um body do html.

function generateRandomColors1 () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.getElementsByClassName("color")[1].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function generateRandomColors2 () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.getElementsByClassName("color")[2].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function generateRandomColors3 () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.getElementsByClassName("color")[3].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

window.onload = function () {
    loadPage();
    gerarQuadro(5);
    selectColor();
    putColor();
    cleanButton();
    newSquare();
    generateRandomColors1();
    generateRandomColors2();
    generateRandomColors3();
}
