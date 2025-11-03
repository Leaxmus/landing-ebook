document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();

    if (!name || !email) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    alert(`Gracias ${name}! Tu e-book será enviado a ${email}.`);
    form.reset();
  });
});
