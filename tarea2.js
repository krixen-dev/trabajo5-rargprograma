//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $formulario = document.querySelector('#formulario');
const $enviarFormulario = $formulario.querySelector('#enviar-formulario');
const $mostrarInformacionUsuario = document.querySelector('#informacion-del-usuario');
const $cartelBienvenida = document.querySelector('#cartel-bienvenida-nombre');
const primerNombre = $formulario.querySelector('#primer-nombre');
const segundoNombre = $formulario.querySelector('#segundo-nombre');
const edad = $formulario.querySelector('#edad')

$enviarFormulario.onclick = function () {
  $cartelBienvenida.textContent = primerNombre.value;
  $mostrarInformacionUsuario.textContent = `Primer nombre: ${primerNombre.value} - Segundo nombre: ${segundoNombre.value} - Edad: ${edad.value}`;
  return false
}
