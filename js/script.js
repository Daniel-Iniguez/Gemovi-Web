/*
    Changelog:
    - 1.0.0 [2025-07-11] Daniel Iñiguez: Creación inicial del archivo con ejemplos de interactividad y scroll suave entre secciones.
*/
// Version: 1.0.0

// Ejemplo de interactividad: Mostrar un mensaje de bienvenida al cargar la página

// Scroll suave entre secciones
document.documentElement.style.scrollBehavior = 'smooth';

// Cargar secciones dinámicamente en un solo contenedor
const sections = ["home", "history", "objective", "services", "contact"];
const container = document.getElementById("sections-content");

async function loadSectionsSequentially() {
    for (const sec of sections) {
        const res = await fetch(`pages/${sec}.html`);
        const html = await res.text();
        const div = document.createElement("div");
        div.innerHTML = html;
        container.appendChild(div);
    }
}
loadSectionsSequentially();

// Evitar scroll automático por hash al cargar secciones
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
        window.scrollTo(0, 0);
    }
});


// Mostrar/ocultar botón según scroll
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        scrollBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
    });
    // Scroll suave al hacer clic
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });