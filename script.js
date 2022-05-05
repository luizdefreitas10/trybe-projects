const buttonEntrar = document.querySelector('.btn');
const emailInput = document.querySelector('.email-class');
const passInput = document.querySelector('.pass-class');
// console.log(buttonEntrar);
buttonEntrar.addEventListener('click', showAlert);

function showAlert(event) {
  event.preventDefault();
  if (emailInput.value === '' || passInput.value === '') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function pageLoaded() {
  alert('Página carregada.');
}

window.onload = function () {
  // showAlert();
  pageLoaded();
}