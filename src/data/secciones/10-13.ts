/**
 * Copy de las secciones 10 a 13 (Preguntas, Carrera, Comienza hoy y Footer),
 * copiado tal cual del Figma (página "04b Wealth · Revolution WM").
 */
import { links, brand, type Title } from '../wealth';

/** Figma 426:536 · "10 · Preguntas frecuentes" */
export const preguntas = {
  kicker: '08 · PREGUNTAS FRECUENTES',
  title: ['Preguntas', 'frecuentes.'] as Title,
  lede: 'Todo lo que necesitas saber antes de tu primera sesión: cómo trabajamos, dónde está tu dinero y cuánto cuesta.',
  contacto: {
    kicker: '¿TIENES OTRA PREGUNTA?',
    title: 'Habla directamente con un asesor.',
    text: 'Escríbenos o contacta a tu asesor de inversiones por cualquiera de nuestros canales.',
    cta: { label: 'CONTACTAR A UN ASESOR', href: links.agenda },
  },
  /**
   * Las 12 preguntas, en orden. En Figma solo la 01 trae respuesta (es la que
   * se ve abierta); las demás salen del sitio actual revolutionwm.com.
   * Las que tengan `respuesta: ''` NO se muestran en la página ni en el JSON-LD.
   */
  items: [
    {
      pregunta: '¿Qué es Revolution Wealth?',
      respuesta:
        'Somos un asesor financiero independiente que opera a través de la plataforma de GBM. Formamos parte del ecosistema Revolution Inc, que integra educación financiera, comunidad y asesoría patrimonial integral.',
    },
    { pregunta: '¿Necesito un asesor para invertir?', respuesta: '' }, // PENDIENTE: respuesta de revolutionwm.com
    { pregunta: '¿Vale la pena contratar asesoría si me gusta estudiar y aprender sobre inversiones?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Es seguro invertir con Revolution Wealth?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Revolution Wealth custodia mi dinero?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Cuál es la diferencia entre invertir en un banco y con Revolution Wealth?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Cómo se contrata la asesoría?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Necesito abrir una cuenta nueva?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Puedo retirar mi dinero cuando quiera?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Cómo cobra Revolution Wealth?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Puedo dejar de recibir la asesoría?', respuesta: '' }, // PENDIENTE
    { pregunta: '¿Cómo puedo comenzar?', respuesta: '' }, // PENDIENTE
  ],
};

/** Figma 426:639 · "11 · Carrera" */
export const carrera = {
  kicker: '09 · CARRERA',
  title: ['Súmate a', 'nuestro equipo.'] as Title,
  body: 'Lo que nos distingue son nuestras personas: un equipo apasionado por proteger y hacer crecer el patrimonio de nuestros clientes. Si eres extraordinario en lo que haces y compartes nuestra misión, hay un lugar para ti.',
  cta: { label: 'VER OPORTUNIDADES', href: links.vacantes },
};

/** Figma 426:654 · "12 · Comienza hoy" */
export const comienza = {
  kicker: 'REVOLUTION WEALTH MANAGEMENT',
  title: ['Comienza tu', 'análisis patrimonial.'] as Title,
  lede: 'Agenda una primera sesión de estrategia con un asesor financiero certificado de Revolution Wealth.',
  cta: { label: 'COMENZAR MI ANÁLISIS PATRIMONIAL', href: links.agenda },
  note: 'TUS RECURSOS PERMANECEN SIEMPRE EN TU CUENTA INDIVIDUAL DE GBM',
};

/** Figma 426:669 · "13 · Footer" */
export const footer = {
  about: ['Asesoría patrimonial independiente, afiliada a GBM.', 'Parte del ecosistema Revolution Inc.'],
  columns: [
    {
      title: 'REVOLUTION WEALTH',
      links: [
        { label: 'Servicios', href: '#servicios' },
        { label: 'Proceso', href: '#proceso' },
        { label: 'Filosofía Core-X', href: '#filosofia' },
        { label: 'Fundadores', href: '#fundadores' },
      ],
    },
    {
      title: 'ECOSISTEMA',
      links: [
        // PENDIENTE: URLs propias de cada marca; por ahora la principal de Revolution
        { label: 'Revolution Media', href: links.revolution, external: true },
        { label: 'Wealth Club', href: links.revolution, external: true },
        { label: 'Wealth Mastery', href: links.revolution, external: true },
        // PENDIENTE: URL de Revolution Capital
        { label: 'Revolution Capital', href: '#', external: false },
      ],
    },
    {
      title: 'CONTACTO',
      links: [
        { label: 'Agenda tu sesión', href: links.agenda },
        { label: 'Preguntas frecuentes', href: '#preguntas' },
        { label: 'Carrera', href: '#carrera' },
        { label: 'Aviso de privacidad', href: '#' }, // PENDIENTE: página del aviso de privacidad
      ],
    },
  ] as { title: string; links: { label: string; href: string; external?: boolean }[] }[],
  legal:
    'Revolution Wealth Management es un asesor en inversiones independiente que opera a través de la plataforma de GBM. Revolution Wealth no custodia recursos: el dinero de cada cliente permanece en su cuenta individual de GBM. La información de este sitio es de carácter informativo y no constituye una oferta ni una recomendación de inversión. Los rendimientos pasados no garantizan rendimientos futuros. Toda inversión conlleva riesgos asociados al tipo de activo.',
  copyright: `© ${brand.year} REVOLUTION WEALTH MANAGEMENT`,
  areas: ['MEDIA', 'EDUCATION', 'WEALTH', 'CAPITAL'],
};
