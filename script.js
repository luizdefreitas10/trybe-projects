let corAzul = document.getElementsByClassName("color")[3];
corAzul.style.backgroundColor = "blue";

let corVermelha = document.getElementsByClassName("color")[1];
corVermelha.style.backgroundColor = "red";

let corAmarela = document.getElementsByClassName("color")[2];
corAmarela.style.backgroundColor = "yellow";

let corPreta = document.getElementsByClassName("color")[0];
corPreta.style.backgroundColor = "black";

const pixelBoard = document.querySelector("#pixel-board");

function loadPage () {
    alert ("Página carregada.");
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
        for (let index = 0; index < pixels.length; index++) {
            pixels[index].addEventListener("click", function (event) {
                const selectedColor = document.querySelector(".selected").style.backgroundColor;
                event.target.style.backgroundColor = selectedColor;
            });  
        }
    }

    function cleanButton () {
       const buttonClear = document.getElementById("clear-board");
       buttonClear.addEventListener("click", function (event) {
           const pixels = document.querySelectorAll(".pixel");
           for (let index = 0; index < pixels.length; index +=1) {
               const whiteningPixels = pixels[index];
               whiteningPixels.style.backgroundColor = "white";
           }
       }); 
    }

window.onload = function () {
loadPage();
gerarQuadro(5);
selectColor();
putColor();
cleanButton();
}

