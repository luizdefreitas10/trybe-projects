const createButton = document.getElementById("criar-tarefa");
const listItens = document.getElementById("lista-tarefas");
const inputItem = document.getElementById("texto-tarefa");

function createLi() {
    createButton.addEventListener('click', function () {
        const newLi = document.createElement("li");
        listItens.appendChild(newLi);
        newLi.innerHTML = inputItem.value;
        inputItem.value = "";
    });

}

function displayAlert () {
    alert("Page loaded.")
}

window.onload = function () {
    createLi ();
    displayAlert ();
}

