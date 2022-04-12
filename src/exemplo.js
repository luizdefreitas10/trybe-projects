// Desafio 6
function highestCount(arrayNums) {
    // seu código aqui
    // return quantide de vezes que o maior deles se repete
    // [9, 1, 2, 3, 9, 5, 7] -> deve retorna 2, quantidade de vezes que o 9 aparece (maior numero do array)
    // Retorne 2 quando o parâmetro passado na função highestCount seja [9, 1, 2, 3, 9, 5, 7]
    // Retorne 1 quando o parâmetro passado na função highestCount seja [0, 4, 4, 4, 9, 2, 1]
    // Retorne 3 quando o parâmetro passado na função highestCount seja [0, 0, 0]
    let maiorNumero = 0;
    let contagem = 0;
    for (let index = 0; index < arrayNums.length; index++) {
    } if (arrayNums[index] > maiorNumero) {
        maiorNumero = arrayNums[index];
    }
    for (let index2 = 0; index2 < arrayNums.length; index2 += 1) {
        if (arrayNums[index2] === maiorNumero) {
            contagem += 1; 
        }
}
    
