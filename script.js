const form = document.querySelector('form'); // Selecciona el formulario
const emailInput = document.querySelector('input[type="email"]'); // Selecciona el input de email
const passwordInput = document.querySelector('input[type="password"]'); // Selecciona el input de password
const submitButton = document.querySelector('button'); // Selecciona el botón "Acceder"

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Previene el envío del formulario por defecto

  const email = emailInput.value;
  const password = passwordInput.value;

  // Verifica si el correo electrónico y la contraseña son correctos
  if (email === 'maelgradosccapaca@gmai.com' && password === 'maelito123') {
    // Si son correctos, redirige a la otra página
    window.location.href = 'resultados.html'; // Reemplaza 'otra_pagina.html' con la URL de tu otra página
  } else {
    // Si no son correctos, muestra un mensaje de error
    alert('Correo electrónico o contraseña incorrectos.');
  }
});