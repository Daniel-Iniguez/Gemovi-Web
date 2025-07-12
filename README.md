# Gemovi Construcción
Sitio web estático para la empresa Gemovi Construcción.

## Estructura y control de versiones

-- `index.html` - Versión: 1.1.0
  - Página principal con barra de navegación y un solo contenedor `contenido-secciones` para las secciones dinámicas.
-- `css/styles.css` - Versión: 1.1.0
  - Estilos principales, fuentes Montserrat y Roboto, colores corporativos amarillo y negro.
-- `js/script.js` - Versión: 1.1.0
  - Scroll suave entre secciones y carga dinámica de secciones desde la carpeta `pages`.
- `pages/` - Carpeta con archivos HTML individuales para cada sección (`home.html`, `history.html`, `objective.html`, `services.html`, `contact.html`).

## Cambios recientes

- Se eliminó el uso de `<section>` en `index.html` y se agregó un solo `<div id="contenido-secciones">`.
- Se implementó la carga dinámica de secciones con JavaScript desde la carpeta `pages`.
- Se mantiene el scroll suave y la navegación por anclas.
- Se mejoró la limpieza y mantenibilidad del código.

## Registro de cambios futuros

- Anota aquí cada cambio realizado, indicando la fecha, el archivo y la versión:

### Ejemplo:
- `[2025-07-11] index.html - Versión 1.0.0 - Carga dinámica de secciones y estructura simplificada.`

---
### Logs y notas adicionales



