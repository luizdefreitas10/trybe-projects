const createButton = document.getElementById("criar-tarefa");
const listItens = document.getElementById("lista-tarefas");
const inputItem = document.getElementById("texto-tarefa");
const removeButton = document.getElementById("apaga-tudo");


function createLi() {
    createButton.addEventListener('click', function () {
        const newLi = document.createElement("li");
        //newLi.className = "liClass"
        listItens.appendChild(newLi);
        newLi.innerHTML = inputItem.value;
        inputItem.value = "";
    });

}

// function changeTextColor() {
//  const selectedLi = document.querySelectorAll(".selected");   listItens.addEventListener('click', function (event) {
//         event.target.className = "selected"
//         //event.target.style.backgroundColor = "grey";
//     })
// }

// function riskItem () {
//     listItens.addEventListener('dblclick', function (event) {
//         event.target.classList.add("completed");
//     }) 
// }

function selectClass() {
    listItens.addEventListener('click', function (event) {
        const selectedLi = document.querySelectorAll(".selected");
        for (let index = 0; index < selectedLi.length; index += 1) {
            selectedLi[index].classList.remove("selected");
        }
        event.target.classList.add("selected");
    });
}

function deleteRisk () {
    listItens.addEventListener('dblclick', function (event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    })
}
    
function removeItens () {
    removeButton.addEventListener('click', function (event) {
        const itensLi = document.querySelectorAll('#lista-tarefas>li');
        for (let index = 0; index < itensLi.length; index +=1) {
            const missionLi = itensLi[index];
            missionLi.parentNode.removeChild(missionLi);
        }      
    })
}

function displayAlert() {
    alert("Page loaded.")
}

window.onload = function () {
    createLi();
    displayAlert();
    selectClass();
    deleteRisk ();
    removeItens ();
}

