# revolution-wealth-web

Sitio web de **Revolution Wealth** (Revolution Wealth Management · asesoría patrimonial, asesor afiliado a GBM).
Diseño fuente: Figma "Revolution Inc — Sitio web (Copy)" (`VxnLXQU0cLViLPPvLdPtu5`), página `04b Wealth · Revolution WM` (nodo `418:336`).
Notas de alcance: llamada del 16-oct-2026 con diseño (Fathom), resumidas en `docs/PENDIENTES.md`.

## Cómo funciona (en simple)

```
Código (este repo) ──push──► GitHub ──auto──► Cloudflare ──► visitantes
```

- **Astro** convierte los archivos de `src/` en una página HTML estática, muy rápida.
- **Cloudflare** está conectado a este repo: cada cambio en `main` se publica solo,
  y cada rama o pull request genera un link de vista previa para revisar antes de publicar.
- No hay servidor ni base de datos.

Es la misma base que `revolution-capital-web` y `wealth-nation-web`.

## Dónde vive cada cosa

| Ruta | Qué es |
|---|---|
| `src/data/wealth.ts` | **Todo el texto de la página, en español**, y los enlaces de los botones (`links`). Para cambiar copy, edita solo este archivo. |
| `src/data/wealth.ts` → `equipo` | **El carrusel del equipo.** Entra alguien: agrega una línea con nombre, puesto y foto (`public/img/equipo-nombre-apellido.webp`). Sale alguien: borra su línea. |
| `src/styles/tokens.css` | Colores, tipografías, tamaños y márgenes (los "tokens" del diseño). |
| `src/styles/global.css` | Estilos base y utilidades compartidas. |
| `src/components/` | Un archivo por sección + piezas compartidas (`Kicker`, `Title`, `Button`, `Brand`, `Nav`). |
| `src/pages/index.astro` | La página principal: junta las secciones en orden. |
| `src/pages/perfil.astro` | `/wealth/perfil`: formulario "Perfil de inversión" (destino del CTA principal), conectado a HubSpot. Preguntas en `perfilPagina` de `src/data/wealth.ts`; configuración en `src/config/hubspot.ts`; pasos en HubSpot en `docs/HUBSPOT-PERFIL.md`. |
| `src/pages/carrera.astro` | Subpágina `/carrera` ("Súmate al equipo"); sus secciones viven en `src/components/carrera/` y su texto en `carreraPagina` de `src/data/wealth.ts`. Para abrir o cerrar una vacante: `carreraPagina.oportunidades.vacantes`. |
| `public/` | Archivos que se sirven tal cual: íconos, robots.txt, fuentes e imágenes. |
| `docs/PENDIENTES.md` | Lo que falta traer de Figma o decidir. |

## Animaciones (y cómo quitarlas)

| Qué | Dónde |
|---|---|
| Interruptor | `src/config/motion.ts` → `MOTION_ENABLED` |
| JavaScript (aparición al entrar en pantalla, conteo de cifras, scroll suave con Lenis) | `src/scripts/motion.ts` |
| Estilos de animación | `src/styles/motion.css` y bloques `html.motion` dentro de cada componente |
| Banner "40 años" (entrada en cascada + conteo + dorado al pasar el mouse) | `src/components/Credentials.astro` |
| Parallax de las fotos de fondo (`data-parallax="0.1"` en la imagen; solo de 768 px en adelante) | `src/scripts/motion.ts` + `src/styles/motion.css` |
| Kicker que se traza de izquierda a derecha | `src/components/Kicker.astro` |
| Llegada del hero (acercamiento de la foto, pasos de la sesión uno por uno) | `src/components/Hero.astro`, `src/components/carrera/HeroCarrera.astro` |
| Amanecer de "El segundo mejor momento es hoy" | `src/components/Principio.astro` |
| Luz que respira en "Comienza tu análisis" (único movimiento continuo) | `src/components/Comienza.astro` |
| Elevación de tarjetas claras al pasar el cursor (clase `lift`) | `src/styles/motion.css` |

- **Apagar:** poner `MOTION_ENABLED = false`, hacer merge. La página queda estática, igual que Figma.
- Si el visitante tiene activado "reducir movimiento", no se anima nada.
- Si el JavaScript no llega a cargar en 2.5 s, las animaciones se apagan solas y todo queda visible.

## Dónde vive: revolution.inc/wealth

El sitio se publica bajo **`/wealth`** (`base` y `outDir` en `astro.config.mjs`):

- Las páginas se generan en `dist/wealth/`. Toda ruta interna pasa por `u()` (`src/config/base.ts`), que le agrega el prefijo.
- `public-root/_redirects` se copia a `dist/_redirects` al compilar. Ahí van `wealth.html` → `/wealth/` (el header de revolution.inc apunta ahí) y las direcciones viejas (`/`, `/carrera`).
- En Cloudflare, una **ruta** `revolution.inc/wealth*` (y `www.revolution.inc/wealth*`) manda esas visitas a este Worker. El resto de revolution.inc lo sigue sirviendo `revolution-inc-landing`.
- **Header:** `src/components/Nav.astro`, armonizado con el de revolution.inc (57 px, mismos botones Media · Education · Wealth · Capital · Nosotros). A la izquierda, el isotipo Ø lleva al home de revolution.inc y el logo de Revolution Wealth + "Asesor afiliado a GBM" a `/wealth`. Los enlaces salen de `inc.nav` en `src/data/wealth.ts`; si revolution.inc cambia su menú, se actualiza ahí.
- **Footer:** `src/config/layout.ts` → `LAYOUT = 'propio'` usa el de Revolution Wealth; `'inc'` usa header y footer de revolution.inc (`src/components/inc/`).

## Configuración de Cloudflare (Workers)

- Producción: https://revolution.inc/wealth (y https://revolution-wealth-web.romeo-8d3.workers.dev/wealth/)
- Vista previa de cada rama: `https://<rama>-revolution-wealth-web.romeo-8d3.workers.dev`

El sitio se publica como un **Worker con archivos estáticos**. `wrangler.jsonc` le dice a
Cloudflare que publique la carpeta `dist/`.

En Cloudflare → Workers & Pages → `revolution-wealth-web` → Settings → Build:

| Campo | Valor |
|---|---|
| Build command | vacío (lo corre `wrangler deploy` por su cuenta, ver `build` en `wrangler.jsonc`) |
| Deploy command | `npx wrangler deploy` |
| Non-production branch deploy command | `npx wrangler preview` (genera links de vista previa; requiere el bloque `previews` de `wrangler.jsonc`) |
| Node | 22 (lo toma de `.node-version`) |

## Trabajar localmente (opcional)

Requiere Node 22+.

```bash
npm install
npm run dev      # abre http://localhost:4321/wealth/ y se recarga al guardar
npm run check    # revisa errores de tipos
npm run build    # genera dist/wealth/ y dist/_redirects, lo mismo que hace Cloudflare
npx wrangler dev # sirve dist/ como en Cloudflare (con redirecciones): http://localhost:8787/wealth/
```
