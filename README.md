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
| `src/pages/index.astro` | La página: junta las secciones en orden. |
| `public/` | Archivos que se sirven tal cual: íconos, robots.txt, fuentes e imágenes. |
| `docs/PENDIENTES.md` | Lo que falta traer de Figma o decidir. |

## Animaciones (y cómo quitarlas)

| Qué | Dónde |
|---|---|
| Interruptor | `src/config/motion.ts` → `MOTION_ENABLED` |
| JavaScript (aparición al entrar en pantalla, conteo de cifras, scroll suave con Lenis) | `src/scripts/motion.ts` |
| Estilos de animación | `src/styles/motion.css` y bloques `html.motion` dentro de cada componente |
| Banner "40 años" (entrada en cascada + conteo + dorado al pasar el mouse) | `src/components/Credentials.astro` |

- **Apagar:** poner `MOTION_ENABLED = false`, hacer merge. La página queda estática, igual que Figma.
- Si el visitante tiene activado "reducir movimiento", no se anima nada.
- Si el JavaScript no llega a cargar en 2.5 s, las animaciones se apagan solas y todo queda visible.

## Configuración de Cloudflare (Workers)

- Producción: https://revolution-wealth-web.romeo-8d3.workers.dev
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
npm run dev      # abre http://localhost:4321 y se recarga al guardar
npm run check    # revisa errores de tipos
npm run build    # genera dist/, lo mismo que hace Cloudflare
```
