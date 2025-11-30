const toggleBtn = document.getElementById("toggleLista");
const listaBox = document.getElementById("listaUsuarios");

const FIREBASE_URL = "https://ebook-landing-page-7c285-default-rtdb.firebaseio.com/usuarios.json";

async function cargarUsuarios() {
  try {
    listaBox.innerHTML = `<p class="text-sm text-gray-600">Cargando usuarios…</p>`;

    const res = await fetch(FIREBASE_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) throw new Error("Error GET Firebase");

    const data = await res.json();

    if (!data) {
      listaBox.innerHTML = `<p class="text-sm text-gray-600">No hay usuarios registrados.</p>`;
      return;
    }

    listaBox.innerHTML = Object.entries(data)
      .map(([id, u]) => {
        return `
          <div class="py-2 border-b">
            <p class="font-semibold text-gray-800">${u.nombre || "Sin nombre"}</p>
            <p class="text-sm text-gray-600">${u.correo || "Sin email"}</p>
            <p class="text-xs text-gray-400">Edad: ${u.edad || "Desconocida"}</p>
          </div>
        `;
      })
      .join("");

  } catch (err) {
    console.error(err);
    listaBox.innerHTML = `<p class="text-sm text-red-600">Error al cargar usuarios.</p>`;
  }
}

toggleBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const seAbre = listaBox.classList.contains("hidden");

  if (seAbre) {
    listaBox.classList.remove("hidden");
    await cargarUsuarios();
  } else {
    listaBox.classList.add("hidden");
  }
});

document.addEventListener("click", (e) => {
  const clickDentroLista = listaBox.contains(e.target);
  const clickEnBoton = toggleBtn.contains(e.target);

  if (!clickDentroLista && !clickEnBoton) {
    listaBox.classList.add("hidden");
  }
});
