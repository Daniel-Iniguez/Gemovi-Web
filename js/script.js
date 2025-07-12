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
sections.forEach(sec => {
    fetch(`pages/${sec}.html`)
        .then(res => res.text())
        .then(html => {
            const div = document.createElement("div");
            div.innerHTML = html;
            container.appendChild(div);
        });
});