// URL de tu realtime database
const DB_URL = "https://ebook-landing-page-7c285-default-rtdb.firebaseio.com//usuarios.json";

const listaBtn = document.querySelector('#listaBtn');
const listaUsuarios = document.querySelector('#listaUsuarios');

listaBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
        const res = await fetch(DB_URL);
        const data = await res.json();

        if (!data) {
            listaUsuarios.innerHTML = "<p>No hay usuarios registrados.</p>";
            listaUsuarios.classList.remove("hidden");
            return;
        }

        const usuariosArray = Object.entries(data).map(([id, usuario]) => ({
            id,
            ...usuario
        }));

        renderUsuarios(usuariosArray);

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
});

function renderUsuarios(usuarios) {
    listaUsuarios.innerHTML = `
        <h3 class="text-xl font-bold mb-3">Usuarios registrados</h3>
        <ul>
            ${usuarios
                .map(
                    u => `
                <li class="border-b py-2">
                    <p><strong>Nombre:</strong> ${u.nombre}</p>
                    <p><strong>Edad:</strong> ${u.edad}</p>
                    <p><strong>Correo:</strong> ${u.correo}</p>
                </li>
            `
                )
                .join("")}
        </ul>
    `;

    listaUsuarios.classList.remove("hidden");
}
