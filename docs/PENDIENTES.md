# Pendientes

Lo que falta para publicar. Fuente de alcance: llamada con Marisol Gudiño (diseño) del 16-oct-2026
(Fathom: https://fathom.video/calls/865253240). Entrega acordada: miércoles 22-oct.

**Figma de trabajo:** "Revolution Inc — Sitio web (Copy)" (`VxnLXQU0cLViLPPvLdPtu5`), página `04b Wealth · Revolution WM`.
El original de Marisol es `jS424JGWQITz5Lx9SPIRTs`.

## Lo que pidió la llamada

- [x] Sección de preguntas frecuentes (acordeón + datos estructurados FAQPage para buscadores)
- [x] Carrusel de asesores con su puesto, fácil de actualizar (`equipo.personas` en `src/data/wealth.ts`)
- [x] Banner "40 años": entra en cascada con conteo de cifras y cambia a dorado al pasar el mouse
- [x] "Ver oportunidades" → formulario de "Únete al equipo" (falta la URL, ver abajo)
- [x] "Conoce más" → página principal de Revolution
- [ ] **Comparar la animación del banner con la de Revolution Inc.** No se pudo ver la original desde el entorno; es una interpretación.

## Contenido que falta

- [ ] **Respuestas 02 a 12 del FAQ.** En Figma solo existe la 01. Son las del sitio actual revolutionwm.com
      (la red del entorno bloquea ese dominio: agregarlo en Allowed domains). Mientras estén vacías no se muestran. Se llenan en `preguntas.items`.
- [ ] **Fotos del equipo:** las del Figma están en blanco y negro; Marisol las va a cambiar por las oficiales.
      Jesús Paz no tiene foto (sale "FOTO PENDIENTE").
- [ ] Fotos de Pablo Sánchez: el original de Figma mide 522 px; pedir una de ~900 px.

## Enlaces por definir (`links` en `src/data/wealth.ts`)

- [ ] `agenda`: destino de "Agenda tu sesión" / "Comenzar mi análisis patrimonial" / "Contactar a un asesor"
      (¿formulario de HubSpot o calendario?). Hoy baja a la sección "Comienza tu análisis".
- [ ] `vacantes`: URL del formulario "Únete al equipo". Hoy baja a la sección Carrera.
- [ ] Aviso de privacidad (footer).
- [ ] URLs propias de Revolution Media, Wealth Club y Wealth Mastery (footer). Hoy van a revolution.inc.

## Diseño

- [x] **Source Serif 4** (OFL, vía `@fontsource/source-serif-4`) en títulos de tarjeta, nombres de fundadores,
      marcas del ecosistema y cifras de Servicios, como pide Figma.
- [ ] Nombres del carrusel de equipo: Figma los define en Feature Display Light 30/32 (así están en el sitio),
      pero el archivo los pinta con una fuente de sustitución sin serifa. Confirmar con Marisol cuál quiere.
- [ ] Licencia web de Feature: confirmar que cubre el dominio final (igual que en Capital).

## Antes de publicar

- [ ] Quitar `noindex` (`src/layouts/Base.astro`) y el `Disallow` de `public/robots.txt`.
- [ ] Dominio final y `site` en `astro.config.mjs`.
