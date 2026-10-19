/**
 * Contenido de la página de Revolution Wealth, copiado del diseño en Figma
 * (archivo "Revolution Inc — Sitio web (Copy)", página "04b Wealth · Revolution WM", nodo 418:336).
 *
 * Todo el texto vive aquí para que editar copy no requiera tocar
 * los componentes. Los titulares son un par [línea 1, línea 2]:
 * la segunda línea va en el color de acento (dorado), como en el diseño.
 */

export type Title = [string, string];

/** Enlaces que salen del sitio o que todavía están por definir (ver docs/PENDIENTES.md). */
export const links = {
  /** "Agenda tu sesión" / "Comenzar mi análisis patrimonial". Por ahora baja a la sección final. */
  agenda: '#comienza',
  /** "Ver oportunidades": formulario de "Únete al equipo". */
  vacantes: '#carrera',
  /** "Conoce más": página principal de Revolution. */
  revolution: 'https://revolution.inc',
};

export const brand = {
  name: 'Revolution Wealth',
  tagline: 'Asesor afiliado a GBM',
  year: 2026,
};

export const nav = {
  links: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Filosofía Core-X', href: '#filosofia' },
    { label: 'Fundadores', href: '#fundadores' },
    { label: 'Preguntas', href: '#preguntas' },
  ],
  cta: { label: 'Agenda tu sesión', href: links.agenda },
};

export const hero = {
  kicker: 'Revolution Wealth Management · Asesoría patrimonial',
  title: ['Asesoría personalizada', 'para que inviertas en tu futuro.'] as Title,
  lede: 'Habla con un asesor financiero certificado de Revolution Wealth y agenda tu primera sesión de estrategia.',
  body: 'Estrategias hechas a la medida, análisis profundo y acompañamiento continuo — con tus recursos siempre en tu propia cuenta de GBM.',
  primary: { label: 'Comenzar mi análisis patrimonial', href: links.agenda },
  secondary: { label: 'Ver cómo trabajamos', href: '#proceso' },
  session: {
    title: 'Tu primera sesión de estrategia',
    steps: [
      { title: 'Diagnóstico de tu situación', text: 'Metas, liquidez y horizonte de inversión' },
      { title: 'Perfil de riesgo', text: 'Qué tanta volatilidad puedes y quieres tolerar' },
      { title: 'Propuesta a la medida', text: 'Sin carteras estándar ni asignaciones prestablecidas' },
    ],
    footer: ['Asesor certificado', 'Respaldo GBM'],
  },
  /** Banner de credenciales. `count` = número al que llega el conteo animado. */
  credentials: [
    { value: '40 años', count: 40, label: 'De trayectoria de GBM, la plataforma que custodia tu cuenta' },
    { value: '17 años', count: 17, label: 'De experiencia de nuestros fundadores en inversiones' },
    { value: '0', count: 0, label: 'Comisiones ocultas o incentivos por producto' },
    { value: '100%', count: 100, label: 'Estrategias hechas a la medida de tus objetivos' },
  ],
};
