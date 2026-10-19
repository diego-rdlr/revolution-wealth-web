// Capa de animación del sitio. Solo se carga si MOTION_ENABLED es true
// (src/config/motion.ts) y solo actúa si <html> tiene la clase `motion`.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const root = document.documentElement;

if (root.classList.contains('motion')) {
  // ——— Aparición al entrar en pantalla (una sola vez) ———
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('is-in');
        el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  // ——— Conteo de cifras: termina SIEMPRE en el valor exacto del texto ———
  function countUp(el: HTMLElement) {
    const target = Number(el.dataset.count);
    const final = el.textContent ?? '';
    const suffix = final.replace(/^[\d.,]+/, '');
    if (!Number.isFinite(target)) return;
    el.setAttribute('aria-label', final); // lectores de pantalla oyen el valor final
    el.classList.add('is-counting');
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = t < 1 ? `${Math.round(target * eased)}${suffix}` : final;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // ——— Scroll suave: solo escritorio con mouse. Nunca en pantallas táctiles
  // (teléfonos, tablets, iPad con trackpad): ahí se usa el scroll nativo. ———
  const desktopMouse =
    matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)').matches &&
    !matchMedia('(any-pointer: coarse)').matches;
  if (desktopMouse) {
    new Lenis({ autoRaf: true, anchors: true, lerp: 0.1 });
  }

  root.classList.add('motion-live');
}
