// Obtener formulario
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // evita recargar la página

    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Obtener errores
    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorMensaje = document.getElementById("errorMensaje");
    const resultado = document.getElementById("resultado");

    // Limpiar errores
    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorMensaje.textContent = "";
    resultado.textContent = "";

    let valido = true;

    // Validar nombre
    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        valido = false;
    }

    // Validar correo con RegExp
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo === "") {
        errorCorreo.textContent = "El correo es obligatorio";
        valido = false;
    } else if (!regexCorreo.test(correo)) {
        errorCorreo.textContent = "Correo inválido";
        valido = false;
    }

    // Validar mensaje
    if (mensaje === "") {
        errorMensaje.textContent = "El mensaje es obligatorio";
        valido = false;
    }

    // Si todo está bien
    if (valido) {
        resultado.textContent = "Enviando...";

        // Simular envío con promesa
        simularEnvio()
            .then(() => {
                resultado.textContent = "✅ Enviado correctamente";
            })
            .catch(() => {
                resultado.textContent = "❌ Error al enviar";
            });
    }
});

// Función con promesa (2 segundos)
function simularEnvio() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5; // 50% éxito

            if (exito) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}