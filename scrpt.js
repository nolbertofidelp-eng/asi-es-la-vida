const formulario = document.getElementById("formulario");
const nombresInput = document.getElementById("nombres");
const apellidosInput = document.getElementById("apellidos");
const listaPersonas = document.getElementById("lista-personas");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombres = nombresInput.value.trim();
    const apellidos = apellidosInput.value.trim();

    // Validar los campos
    if (nombres === "" || apellidos === "") {
        mostrarMensaje(
            "Por favor, completa todos los campos.",
            "error"
        );
        return;
    }

    // Eliminar el mensaje inicial de la lista
    const elementoVacio = listaPersonas.querySelector(".vacio");

    if (elementoVacio) {
        elementoVacio.remove();
    }

    // Crear un nuevo elemento
    const persona = document.createElement("li");
    persona.textContent = `${nombres} ${apellidos}`;

    // Agregar la persona a la lista
    listaPersonas.appendChild(persona);

    // Mostrar confirmación
    mostrarMensaje(
        "¡Registro realizado correctamente!",
        "exito"
    );

    // Limpiar el formulario
    formulario.reset();
    nombresInput.focus();
});

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo;
}