const carrusel = document.querySelector(".carrusel-contenedor");
const imagenes = document.querySelectorAll(".carrusel-img");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let index = 0;
const totalImagenes = imagenes.length;

// Función para actualizar el carrusel
function actualizarCarrusel() {
  carrusel.style.transform = `translateX(${-index * 600}px)`;
}

// Avanzar al siguiente
btnNext.addEventListener("click", () => {
  index = (index + 1) % totalImagenes; // Vuelve a 0 si llega al final
  actualizarCarrusel();
});

// Retroceder al anterior
btnPrev.addEventListener("click", () => {
  index = (index - 1 + totalImagenes) % totalImagenes; // Vuelve al último si está en 0
  actualizarCarrusel();
});

// Cambio automático cada 3 segundos
setInterval(() => {
  index = (index + 1) % totalImagenes;
  actualizarCarrusel();
}, 5000);



