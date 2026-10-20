/**
 * El sitio vive bajo /wealth (revolution.inc/wealth). Toda ruta interna
 * (imágenes, fuentes, páginas) pasa por `u()` para llevar ese prefijo.
 * Si algún día vuelve a la raíz, basta cambiar `base` en astro.config.mjs.
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** u('/img/logo.png') → '/wealth/img/logo.png' · u('/#servicios') → '/wealth/#servicios' */
export const u = (path: string) => BASE + path.replace(/^\//, '');
