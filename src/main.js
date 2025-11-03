document.addEventListener("DOMContentLoaded", () => {
  console.log("Landing page cargada correctamente ✅");

  const form = document.querySelector("form");
  
  // Validación simple del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();

    if (!name || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    alert(`Gracias ${name}! Tu e-book será enviado a ${email}.`);
    form.reset();
  });

  // Función auxiliar para validar email
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Aplica animación de entrada a las secciones
  document.querySelectorAll("section, div").forEach((el, index) => {
    setTimeout(() => el.classList.add("fade-in"), index * 100);
  });
});
