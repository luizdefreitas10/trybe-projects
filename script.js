const createButton = document.getElementById("criar-tarefa");
const listItens = document.getElementById("lista-tarefas");
const inputItem = document.getElementById("texto-tarefa");

function createLi() {
    createButton.addEventListener('click', function () {
        const newLi = document.createElement("li");
        newLi.className = "liClass"
        listItens.appendChild(newLi);
        newLi.innerHTML = inputItem.value;
        inputItem.value = "";
    });

}

function changeTextColor () {
    listItens.addEventListener ('click', function (event) {
        event.target.style.backgroundColor = "grey";
    })
}

function displayAlert () {
    alert("Page loaded.")
}

window.onload = function () {
    createLi ();
    displayAlert ();
    changeTextColor ();
}

