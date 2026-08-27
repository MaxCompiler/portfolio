# Portafolio Personal
Sitio web personal desarrollado para presentar mi trayectoria, stack tecnológico, proyectos web destacados e información de contacto. Diseñado con una interfaz moderna y futurista, totalmente responsivo y empaquetado con Webpack 5.

**Link del portafolio:** [https://portafolio-edwin-suarez.netlify.app/](https://portafolio-edwin-suarez.netlify.app/)

---

## Tecnologías y Herramientas

- **Frontend:** HTML5 semántico, CSS3 moderno (Custom Properties, CSS Grid, Flexbox, Media Queries), JavaScript (ES6+).
- **Bundler & Tooling:** Webpack 5, Webpack Dev Server, Mini CSS Extract Plugin, HTML Webpack Plugin, Copy Webpack Plugin.
- **Librerías & Iconografía:** FontAwesome, Eins-Modal (para visualización de proyectos y formulario).
- **Servicios:** Formspree (gestión de mensajes de contacto), Netlify (despliegue continuo).

---

## Características Principales

- **Diseño Adaptativo (Mobile-First):** Optimizado para dispositivos móviles, tablets y escritorios.
- **Sección de Proyectos Interactiva:** Modales integrados para mostrar capturas, descripción técnica, stack utilizado y enlaces directos a demos.
- **Formulario de Contacto Protegido:** Envío de mensajes directo a bandeja de entrada sin exponer correos personales al scraping web.
- **Optimización en Producción:** Minificación y generación de hashes únicos (`contenthash`) en recursos para gestión eficiente de caché.
- **Descarga Directa de CV:** Botón configurado para la descarga inmediata del curriculum vitae en PDF.

---

## Estructura del proyecto

```text
portafolio/
├── dist/                  # Archivos compilados para producción
├── src/
│   ├── img/               # Recursos gráficos e imágenes de proyectos
│   ├── cv-edwin-suarez.pdf # Archivo de CV descargable
│   ├── index.html         # Plantilla HTML principal
│   ├── index.js           # Punto de entrada de JavaScript y dependencias
│   └── style.css          # Hojas de estilo y diseño responsivo
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js      # Configuración de empaquetado de Webpack