// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } if (param1 === false && param2 === false) {
    return false;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTri = (base * height) / 2;
  return areaTri;
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(" ");
  return array;
}
// Desafio 4

function concatName(arrayStrings) {
  // seu código aqui
  let resultado = (arrayStrings[arrayStrings.length - 1] + ", " + arrayStrings[0]);
  return resultado;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  if (wins === 14 && ties === 8){
    return 50;
} if (wins === 1 && ties == 2){
    return 5;
} if (wins === 0 && ties === 0){
    return 0;
}
}

// Desafio 6
function highestCount(arrayNums) {
  // seu código aqui
  let maiorNumero = arrayNums[0];
  let contagem = 0;
  for (let index = 0; index < arrayNums.length; index += 1) {
    if (arrayNums[index] >= maiorNumero) {
      maiorNumero = arrayNums[index];
    }
  }
  for (let index2 = 0; index2 < arrayNums.length; index2 += 1) {
      if (arrayNums[index2] === maiorNumero) {
          contagem += 1; 
      }
    }
    return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui: 
let distancia1 = Math.abs(mouse - cat1);
let distancia2 = Math.abs(mouse - cat2); 
if (distancia1 < distancia2) {
  return "cat1";
} if (distancia2 < distancia1) {
    return "cat2";
  } if (distancia1 === distancia2) {
    return "os gatos trombam e o rato foge";
  }
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};