// @ts-check
import { defineConfig } from 'astro/config';

// Sitio 100% estático: `npm run build` genera la carpeta dist/,
// que el Worker de Cloudflare publica tal cual (ver wrangler.jsonc).
export default defineConfig({
  site: 'https://revolution-wealth-web.romeo-8d3.workers.dev',
});
