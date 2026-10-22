# Pendientes

Lo que falta para publicar. Fuente de alcance: llamada con Marisol Gudiño (diseño) del 16-oct-2026
(Fathom: https://fathom.video/calls/865253240). Entrega acordada: miércoles 22-oct.

**Figma de trabajo:** "Revolution Inc — Sitio web (Copy)" (`VxnLXQU0cLViLPPvLdPtu5`), página `04b Wealth · Revolution WM`.
El original de Marisol es `jS424JGWQITz5Lx9SPIRTs`.

## Lo que pidió la llamada

- [x] Sección de preguntas frecuentes (acordeón + datos estructurados FAQPage para buscadores)
- [x] Carrusel de asesores con su puesto, fácil de actualizar (`equipo.personas` en `src/data/wealth.ts`)
- [x] Banner "40 años": entra en cascada con conteo de cifras y cambia a dorado al pasar el mouse
- [x] "Ver oportunidades" → formulario de Google de "Únete al equipo" (el de revolutionwm.com/carrera)
- [x] "Conoce más" → página principal de Revolution
- [ ] **Comparar la animación del banner con la de Revolution Inc.** No se pudo ver la original desde el entorno; es una interpretación.

## Contenido que falta

- [x] **Respuestas del FAQ** (02 a 12) tomadas de revolutionwm.com el 19-oct. Se corrigieron dos erratas
      ("asesores certificados", "Bursátil"). La 13 del sitio ("¿a quién llamo?") no está en Figma: la cubre la tarjeta de contacto.
- [ ] Revisar con Marisol la frase de la respuesta 02 "Ah, tampoco trabajan con metas" (viene así del sitio actual).
- [x] Fotos del equipo: las de Figma (blanco y negro, así las dejó diseño).
- [ ] Fotos de Pablo Sánchez: el original de Figma mide 522 px; pedir una de ~900 px.

## Enlaces por definir (`links` en `src/data/wealth.ts`)

- [x] `agenda`: Microsoft Form de "Comenzar mi análisis patrimonial" del sitio actual (abre en otra pestaña).
- [x] `vacantes`: formulario de Google de "Únete al equipo".
- [x] Aviso de privacidad: https://revoluciondelariqueza.com/aviso-de-privacidad/ (el mismo de revolution.inc).
- [x] Wealth Club y Wealth Mastery con sus URLs de revoluciondelariqueza.com; Revolution Media va a revolution.inc.

## Subpágina /carrera (Figma `04c Wealth · Sumate a el equipo`, frame 574:337)

Construida desde el Figma y las capturas de diseño del 20-oct (titulares, botones e íconos ya confirmados).

- [ ] CTAs (formulario de vacante y WhatsApp de asesoría): se definen con Vini.
- [ ] Foto de asesores: el original de Figma mide 708 px (se ve suave en pantallas retina); pedir una de ~1400 px.

## Perfil de inversión (/wealth/perfil)

- [x] HubSpot: propiedades, formulario y workflow listos y probados (docs/HUBSPOT-PERFIL.md).
- [x] CTA principal → /wealth/perfil.
- [ ] Borrar el contacto y negocio de prueba "Ana Prueba Web RWM (borrar)".
- [ ] **Perfil de riesgo** (no olvidar): el Microsoft Form calificaba en modo cuestionario. Falta que Vini
      pase cómo puntúa (supuesto: 1a opción = 3, 2a = 2, 3a = 1) y los rangos para Conservador / Moderado /
      Agresivo. Con eso la web lo calcula y lo guarda en una propiedad `perfil_de_riesgo_rwm`.
- [ ] Desactivar el Microsoft Form cuando la página esté conectada.

## Ajustes de Vini (22-oct)

- [x] Ecosistema: "Wealth Club · Wealth X" y "Revolution Capital".
- [x] FAQ: "¿Cuál es el monto mínimo para recibir asesoría?".
- [x] Equipo: foto de Jesús Paz y nueva persona Elena Araoz (Administración & Finanzas).

## Diseño

- [x] **Source Serif 4** (OFL, vía `@fontsource/source-serif-4`) en títulos de tarjeta, nombres de fundadores,
      marcas del ecosistema y cifras de Servicios, como pide Figma.
- [x] Nombres del carrusel de equipo y títulos de tarjeta de /carrera en sans (Geist 30/32), como se ven en Figma
      (las capas dicen Feature Display Light, pero diseño las ve en sans).
- [ ] Licencia web de Feature: confirmar que cubre el dominio final (igual que en Capital).

## revolution.inc/wealth

- [ ] Cloudflare: ruta `revolution.inc/wealth*` y `www.revolution.inc/wealth*` → Worker `revolution-wealth-web`.
- [ ] Cloudflare: Redirect Rule `revolutionwealth.revolution.inc/*` → `https://revolution.inc/wealth/*` (301).
- [x] Header: se queda el de Revolution Wealth con "Asesor afiliado a GBM", como en Figma (`LAYOUT = 'propio'`).

## Antes de publicar

- [ ] Quitar `noindex` (`src/layouts/Base.astro`) y el `Disallow` de `public/robots.txt`.
- [ ] Dominio final y `site` en `astro.config.mjs`.
