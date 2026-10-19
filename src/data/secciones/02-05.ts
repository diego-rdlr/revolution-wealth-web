/**
 * Copy de las secciones 02 (Invierte con expertos), 03 (Servicios),
 * 04 (Proceso) y 05 (Principio), tal como está en Figma
 * (página "04b Wealth · Revolution WM").
 */
import { links, type Title } from '../wealth';

/** Figma 422:557 · "02 · Invierte con expertos" */
export const expertos = {
  kicker: '01 · CÓMO TE ACOMPAÑAMOS',
  title: ['Invierte de la mano con expertos', 'para llegar a donde quieras.'] as Title,
  lead: 'Accede a estrategias personalizadas, análisis profundo y acompañamiento continuo para alcanzar tus metas financieras.',
  cta: { label: 'COMENZAR MI ANÁLISIS PATRIMONIAL', href: links.agenda },
  pilares: [
    {
      title: 'Estrategia de largo plazo',
      text: 'Un plan construido sobre tus objetivos, no sobre el ruido del mercado.',
      icon: '/img/expertos-icono-estrategia.png',
    },
    {
      title: 'Asesoría especializada',
      text: 'Un asesor que conoce tu portafolio y responde cuando lo necesitas.',
      icon: '/img/expertos-icono-asesoria.png',
    },
    {
      title: 'Comunicación clara',
      text: 'Información oportuna, en lenguaje directo y sin tecnicismos innecesarios.',
      icon: '/img/expertos-icono-comunicacion.png',
    },
    {
      title: 'Revisión integral',
      text: 'Evaluaciones periódicas para ajustar el rumbo cuando cambian las condiciones o tus prioridades.',
      icon: '/img/expertos-icono-revision.png',
    },
  ],
};

/** Figma 424:490 · "03 · Servicios" */
export const servicios = {
  kicker: '02 · SERVICIOS',
  title: ['Servicios que', 'te ofrecemos.'] as Title,
  body: 'Cuatro frentes de una sola estrategia patrimonial: planear, gestionar, proteger y construir el portafolio correcto para ti.',
  items: [
    {
      title: 'Planeación financiera',
      text: 'Recomendaciones personalizadas para ayudarte a alcanzar tus objetivos.',
      tag: 'PLAN',
      icon: '/img/servicios-icono-plan.png',
    },
    {
      title: 'Gestión patrimonial',
      text: 'Hecha a la medida. Sin carteras estándar ni asignaciones prestablecidas.',
      tag: 'GESTIÓN',
      icon: '/img/servicios-icono-gestion.png',
    },
    {
      title: 'Seguros',
      text: 'Porque proteger la riqueza es tan importante como hacerla crecer.',
      tag: 'PROTECCIÓN',
      icon: '/img/servicios-icono-proteccion.png',
    },
    {
      title: 'Estrategias y portafolio',
      text: 'Hechos a la medida, usando estrategias de los mejores asset managers.',
      tag: 'PORTAFOLIO',
      icon: '/img/servicios-icono-portafolio.png',
    },
  ],
};

/** Figma 424:538 · "04 · Proceso" */
export const proceso = {
  kicker: '03 · NUESTRO PROCESO',
  title: ['Nuestro proceso', 'de atención.'] as Title,
  body: 'Un método de cuatro pasos que se repite mientras dure nuestra relación: la estrategia se revisa tantas veces como cambie tu vida o el mercado.',
  stepLabel: 'PASO',
  steps: [
    {
      title: 'Escuchar y comprender',
      text: 'Evaluamos tu situación actual, tolerancia al riesgo, necesidades de liquidez y objetivos de inversión.',
    },
    {
      title: 'Presentar alternativas',
      text: 'Construimos un portafolio optimizado considerando todas las clases de activo disponibles.',
    },
    {
      title: 'Implementar',
      text: 'Ejecutamos las operaciones que autorizas con agilidad y precisión.',
    },
    {
      title: 'Revisión constante',
      text: 'Monitoreamos de forma proactiva los cambios económicos, el desempeño de tus productos y tus objetivos.',
    },
  ],
};

/** Figma 424:575 · "05 · Principio" */
export const principio = {
  kicker: 'PRINCIPIO REVOLUTION WEALTH',
  title: ['El mejor momento para empezar a invertir fue ayer.', 'El segundo mejor momento es hoy.'] as Title,
  cta: { label: 'EMPIEZA HOY', href: links.agenda },
};
