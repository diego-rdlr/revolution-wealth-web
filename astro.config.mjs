// @ts-check
import { defineConfig } from 'astro/config';

// Sitio 100% estático. Vive bajo /wealth: en producción es revolution.inc/wealth
// (una ruta de Cloudflare manda revolution.inc/wealth* a este Worker).
// Por eso las páginas se generan en dist/wealth/ y el Worker publica dist/ (ver wrangler.jsonc);
// en dist/_redirects van las redirecciones de las direcciones viejas (ver public-root/).
export default defineConfig({
  site: 'https://revolution.inc',
  base: '/wealth',
  outDir: './dist/wealth',
});
