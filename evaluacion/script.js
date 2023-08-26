// Obtener los elementos del formulario
var correo = document.getElementById("correo");
var nombre = document.getElementById("nombre");
var telefono  = document.getElementById("telefono");
var contraseña  = document.getElementById("contraseña");

// Añadir un evento al enviar el formulario
formulario.addEventListener("submit", function(event) {
  // Si la contraseña y la confirmación no coinciden
  if (password.value !== confirm.value) {
    // Mostrar un mensaje de error
    alert("Las contraseñas no coinciden");
    // Cancelar el envío del formulario
    event.preventDefault();
  }
});