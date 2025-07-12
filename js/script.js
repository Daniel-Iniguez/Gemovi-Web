/*
    Changelog:
    - 1.0.0 [2025-07-11] Daniel Iñiguez: Creación inicial del archivo con ejemplos de interactividad y scroll suave entre secciones.
    - 1.2.0 [2025-07-12] GitHub Copilot: Agregado modo oscuro con persistencia y cambio de ícono.
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

// Modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeIcon.textContent = isDark ? '☀️' : '🌙';
    // Opcional: guardar preferencia en localStorage
    localStorage.setItem('darkMode', isDark ? 'on' : 'off');
});

// Al cargar, aplicar preferencia guardada
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark-mode');
        darkModeIcon.textContent = '☀️';
    }
});