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


submitBtn.addEventListener('click', () => {
    if (!submitBtn.disabled) form.submit();
});
