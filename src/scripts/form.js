const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const correo = document.getElementById('correo');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('ebookForm');

function validar() {
    const valido = nombre.value.trim() !== '' && edad.value !== '' && correo.validity.valid;

    if (valido) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

nombre.addEventListener('input', validar);
edad.addEventListener('change', validar);
correo.addEventListener('input', validar);

submitBtn.addEventListener('click', async () => {
    if (submitBtn.disabled) return;

    const data = {
        nombre: nombre.value,
        edad: edad.value,
        correo: correo.value,
        fecha: new Date().toISOString()
    };

    try {
        const res = await fetch(
            "https://ebook-landing-page-7c285-default-rtdb.firebaseio.com/usuarios.json",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }
        );

        if (!res.ok) throw new Error("Error al guardar en Firebase");

        alert("Datos guardados exitosamente");

        form.reset();
        validar(); // vuelve a desactivar el botón
    } catch (error) {
        console.error(error);
        alert("Hubo un problema guardando los datos.");
    }
});
