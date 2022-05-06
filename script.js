const buttonEntrar = document.querySelector('.btn');
const emailInput = document.querySelector('.email-class');
const passInput = document.querySelector('.pass-class');
// console.log(buttonEntrar);
function showAlert(event) {
  event.preventDefault();
  if (emailInput.value === '' || passInput.value === '') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

buttonEntrar.addEventListener('click', showAlert);

function pageLoaded() {
  alert('Página carregada.');
}

window.onload = function loadContent() {
  // pageLoaded();
};
