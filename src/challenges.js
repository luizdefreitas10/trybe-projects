/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } if (param1 === false && param2 === false) {
    return false;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let areaTri = (base * height) / 2;
  return areaTri;
}
// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
// Desafio 4

function concatName(arrayStrings) {
  let resultado = `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
  return resultado;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winPoints + tiesPoints;
  return totalPoints;
}
// Desafio 6
function highestCount(arrayNums) {
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
  let distancia1 = Math.abs(mouse - cat1); // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math ;
  let distancia2 = Math.abs(mouse - cat2); // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs ;
  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia2 < distancia1) {
    return 'cat2';
  } if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(texto) {
  texto = texto.replace(/a/g, '1');
  texto = texto.replace(/e/g, '2');
  texto = texto.replace(/i/g, '3');
  texto = texto.replace(/o/g, '4');
  texto = texto.replace(/u/g, '5');
  return texto;
}

function decode(texto) {
  texto = texto.replace(/1/g, 'a');
  texto = texto.replace(/2/g, 'e');
  texto = texto.replace(/3/g, 'i');
  texto = texto.replace(/4/g, 'o');
  texto = texto.replace(/5/g, 'u');
  return texto;
}
// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let objs = [];
  let sortedTechs = tech.sort();
  sortedTechs.forEach((technologies) => {
    const techObj = {
      tech: technologies,
      name,
    };
    objs.push(techObj);
  });
  return objs;
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
