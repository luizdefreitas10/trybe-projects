const createButton = document.getElementById("criar-tarefa");
const listItens = document.getElementById("lista-tarefas");
const inputItem = document.getElementById("texto-tarefa");


function createLi() {
    createButton.addEventListener('click', function () {
        const newLi = document.createElement("li");
        //newLi.className = "liClass"
        listItens.appendChild(newLi);
        newLi.innerHTML = inputItem.value;
        inputItem.value = "";
    });

}

function changeTextColor() {
 const selectedLi = document.querySelectorAll(".selected");   listItens.addEventListener('click', function (event) {
        event.target.className = "selected"
        //event.target.style.backgroundColor = "grey";
    })
}

function selectClass() {
    listItens.addEventListener('click', function (event) {
        const selectedLi = document.querySelectorAll(".selected");
        for (let index = 0; index < selectedLi.length; index += 1) {
            selectedLi[index].classList.remove("selected");
        }
        event.target.classList.add("selected");
    });
}

function displayAlert() {
    alert("Page loaded.")
}

window.onload = function () {
    createLi();
    displayAlert();
    changeTextColor();
    selectClass();
}

