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
  /** "Agenda tu sesión" / "Comenzar mi análisis patrimonial": el Microsoft Form del sitio actual (revolutionwm.com). */
  agenda:
    'https://forms.office.com/pages/responsepage.aspx?id=SsUEMUpKMked1DTOMJunxEL0r7geOTNOhEcZMIHL08NUMzUxNlhTUk4yVUZURTZGUkZMU09aTEc1TS4u&route=shorturl',
  /** "Ver oportunidades": formulario de Google de "Únete al equipo" (el de revolutionwm.com/carrera). */
  vacantes: 'https://docs.google.com/forms/d/e/1FAIpQLSeTssne4LEUf0Ar8CD6KhtNOa5hFwEIKJK2eWeKgm6GRMEyMA/viewform',
  /** "Conoce más": página principal de Revolution. */
  revolution: 'https://revolution.inc',
  capital: 'https://revolutioncapital.mx',
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

/** Figma 425:492 · "06 · Filosofía Core-X" */
export const coreX = {
  kicker: '04 · FILOSOFÍA CORE-X',
  title: ['Filosofía Core-X:', 'invirtiendo en el futuro.'] as Title,
  lead: 'Una estrategia que combina una base estable con el potencial de crecimiento exponencial de las grandes tendencias de disrupción.',
  components: [
    { label: 'CORE', text: 'La base estable y predecible del portafolio.', tone: 'core' },
    { label: 'EXPONENTIAL', text: 'Orientado a capturar el crecimiento acelerado de la disrupción.', tone: 'exp' },
  ] as { label: string; text: string; tone: 'core' | 'exp' }[],
  note: 'Diseñada para quien busca preservar y hacer crecer su patrimonio con disciplina, sin dejar pasar las oportunidades de mayor crecimiento.',
  chart: {
    equation: ['CORE', 'EXPONENTIAL', 'CORE-X'] as [string, string, string],
    expLabel: 'EXPONENTIAL · DISRUPCIÓN',
    coreLabel: 'CORE · BASE ESTABLE',
    axis: ['HOY', '5 AÑOS', '10 AÑOS', '15 AÑOS', '20 AÑOS'],
    disclaimer: 'ILUSTRATIVO · NO REPRESENTA RENDIMIENTOS ESPERADOS',
  },
};

/** Figma 425:541 · "07 · Fundadores" */
export const fundadores = {
  kicker: '05 · FOUNDERS & MANAGING PARTNERS',
  title: ['Quienes están detrás', 'de tu patrimonio.'] as Title,
  body: 'Más de cuatro décadas combinadas en banca, family offices, activos alternativos y operación de empresas en tres países.',
  people: [
    {
      name: 'Javier Morodo',
      role: 'CEO · REVOLUCIÓN DE LA RIQUEZA',
      photo: '/img/fundadores-javier.webp',
      points: [
        '17 años en tecnología, finanzas e inversiones; más de 15 en activos alternativos.',
        'Cofundador de GOAT Capital. Inversionista ángel y consejero.',
        'Exdirectivo de Citibank, GBM y Bitso.',
        'Economista · MBA IPADE.',
      ],
    },
    {
      name: 'Pablo Sánchez',
      role: 'COFUNDADOR · GOAT CAPITAL',
      photo: '/img/fundadores-pablo.webp',
      points: [
        'Más de 13 años como Director General de Family Office, enfocado en activos alternativos.',
        'Inversionista ángel.',
        'Consejero en Cracks Education, Mis Propias Finanzas y Revolución de la Riqueza.',
        'Economista · MBA Babson College.',
      ],
    },
    {
      name: 'Vinicius Ramos',
      role: 'FUNDADOR · REVOLUTION WEALTH',
      photo: '/img/fundadores-vinicius.webp',
      points: [
        'Fundador de Revolution Wealth, firma afiliada a GBM.',
        '17 años liderando operaciones en Brasil, México y Estados Unidos.',
        'Ex Country Manager y Managing Director en Rotoplas, Texas Valley y NVA Capital.',
        'Administración de Empresas · UFPR.',
      ],
    },
  ],
};

export interface Persona {
  nombre: string;
  /** Puesto tal como está en Figma (se ve en versalitas). */
  puesto: string;
  /** Ruta de la foto en /public/img (cuadrada, WebP). `null` = "FOTO PENDIENTE". */
  foto: string | null;
}

/**
 * Figma 538:490 · "07b · Equipo" (carrusel).
 * Lista completa del equipo: frame 549:490 "Equipo RW · fotos y puestos".
 *
 * Para AGREGAR a alguien: sube su foto cuadrada a /public/img como
 * `equipo-nombre-apellido.webp` y agrega una línea aquí. Para QUITAR:
 * borra su línea (y su foto). El orden de la lista es el del carrusel;
 * el contador ("01–05 / 14") y los puntos se calculan solos.
 */
export const equipo = {
  kicker: 'EL EQUIPO',
  tag: 'REVOLUTION WEALTH',
  title: 'El equipo de Revolution Wealth.',
  lede: 'Asesores, estrategas y operación trabajando por un solo objetivo: tu patrimonio.',
  placeholder: 'FOTO PENDIENTE',
  personas: [
    { nombre: 'Vinicius R. Ramos', puesto: 'CEO · REVOLUTION WEALTH', foto: '/img/equipo-vinicius-r-ramos.webp' },
    { nombre: 'Hugo Rodrigo Solís', puesto: 'DIRECTOR DE ADVISORY', foto: '/img/equipo-hugo-rodrigo-solis.webp' },
    { nombre: 'Jesús Paz', puesto: 'INVESTMENT STRATEGIST', foto: null },
    { nombre: 'María Fernanda López', puesto: 'BACK OFFICE', foto: '/img/equipo-maria-fernanda-lopez.webp' },
    { nombre: 'Axel Méndez', puesto: 'BACK OFFICE', foto: '/img/equipo-axel-mendez.webp' },
    { nombre: 'Camilo Parra', puesto: 'BACK OFFICE', foto: '/img/equipo-camilo-parra.webp' },
    { nombre: 'José Carlos Villa', puesto: 'ASESOR PATRIMONIAL', foto: '/img/equipo-jose-carlos-villa.webp' },
    { nombre: 'Fernando Mejía', puesto: 'ASESOR PATRIMONIAL', foto: '/img/equipo-fernando-mejia.webp' },
    { nombre: 'Jacqueline Rodríguez', puesto: 'ASESORA PATRIMONIAL SR.', foto: '/img/equipo-jacqueline-rodriguez.webp' },
    { nombre: 'Josué Romero', puesto: 'ASESOR PATRIMONIAL JR.', foto: '/img/equipo-josue-romero.webp' },
    { nombre: 'Ben López', puesto: 'ASESOR PATRIMONIAL', foto: '/img/equipo-ben-lopez.webp' },
    { nombre: 'Luis Alberto Téllez', puesto: 'ASESOR PATRIMONIAL', foto: '/img/equipo-luis-alberto-tellez.webp' },
    { nombre: 'Rychel Parra', puesto: 'ASESOR ASOCIADO', foto: '/img/equipo-rychel-parra.webp' },
    { nombre: 'César Colin', puesto: 'ASESOR PATRIMONIAL', foto: '/img/equipo-cesar-colin.webp' },
  ] as Persona[],
};

/** Figma 425:606 · "08 · Nuestro enfoque" */
export const enfoque = {
  kicker: '06 · NUESTRO ENFOQUE',
  title: ['Nuestro enfoque es claro:', 'criterio, disciplina y paz mental financiera.'] as Title,
  mision: 'En un mundo marcado por la volatilidad y la incertidumbre, nuestra labor es clara:',
  body: 'Diseñamos estrategias de inversión con visión de largo plazo, disciplina y gestión del riesgo, para que puedas tomar decisiones financieras con claridad, confianza y tranquilidad.',
  principios: [
    { title: 'Criterio', text: 'Decisiones sustentadas en análisis, no en el ruido del mercado.' },
    { title: 'Disciplina', text: 'Visión de largo plazo y gestión del riesgo en cada movimiento.' },
    { title: 'Paz mental', text: 'Claridad, confianza y tranquilidad sobre tu patrimonio.' },
  ],
};

export interface Division {
  /** "Revolution " + `marca` (la segunda palabra va en color de acento). */
  marca: string;
  sub: string;
  icono: string;
  /** La división de esta página: fila resaltada en dorado con "Estás aquí". */
  actual?: boolean;
  /** Enlace opcional (abre en otra pestaña). Figma no define destinos: por ahora ninguno. */
  href?: string;
}

/** Figma 426:492 · "09 · Ecosistema Revolution Inc" */
export const ecosistema = {
  kicker: '07 · ECOSISTEMA REVOLUTION INC',
  title: ['Parte de un ecosistema', 'que compone riqueza.'] as Title,
  lead: 'Revolution Wealth forma parte del ecosistema Revolution Inc: una plataforma integral que combina educación financiera, comunidad y asesoría patrimonial profesional.',
  body: 'Aprendes en Media y Education, construyes con Wealth y accedes a mercados privados con Capital.',
  aqui: 'ESTÁS AQUÍ',
  divisiones: [
    { marca: 'Media', sub: 'PODCAST · REDES · NEWSLETTER', icono: '/img/ecosistema-icono-media.png' },
    { marca: 'Education', sub: 'WEALTH CLUB · WEALTH MASTERY', icono: '/img/ecosistema-icono-education.png' },
    { marca: 'Wealth', sub: 'REVOLUTION WEALTH MANAGEMENT', icono: '/img/ecosistema-icono-wealth.png', actual: true },
    { marca: 'Capital', sub: 'REVOLUTION CAPITAL · FUND II', icono: '/img/ecosistema-icono-capital.png' },
  ] as Division[],
};

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
   * Las 12 preguntas, en orden. Las preguntas son las del Figma; las respuestas
   * de la 02 a la 12 salen del sitio actual revolutionwm.com (19-oct-2026).
   * La 01 es la versión corta que trae el Figma.
   * Cada línea del arreglo `respuesta` es un párrafo.
   * Si una pregunta tiene `respuesta: []`, NO se muestra en la página ni en el JSON-LD.
   */
  items: [
    {
      pregunta: '¿Qué es Revolution Wealth?',
      respuesta: [
        'Somos un asesor financiero independiente que opera a través de la plataforma de GBM. Formamos parte del ecosistema Revolution Inc, que integra educación financiera, comunidad y asesoría patrimonial integral.',
      ],
    },
    {
      pregunta: '¿Necesito un asesor para invertir?',
      respuesta: [
        'Para invertir, no. Para invertir bien, sí.',
        'Invertir no es algo sencillo, así que con un asesor de inversiones, recibes apoyo y orientación para construir una cartera de inversiones ideal, según tu perfil y tus propios objetivos. En Revolution Wealth, priorizamos las relaciones cercanas y duraderas, por lo que nuestros asesores certificados tienen amplio conocimiento y buscan ofrecer lo mejor para ti de manera transparente. Ah, tampoco trabajan con metas, comprometiéndose a brindar la mejor solución posible para ti. De esta manera, nuestro trabajo es ayudarte en la diversificación de las inversiones de acuerdo con tus expectativas, facilitando tu toma de decisiones y mostrando posibles riesgos y ganancias.',
      ],
    },
    {
      pregunta: '¿Vale la pena contratar asesoría si me gusta estudiar y aprender sobre inversiones?',
      respuesta: [
        'El servicio de asesoría se vuelve aún más valioso cuando el cliente tiene interés y conocimiento sobre el tema. En la práctica, la decisión final sobre adoptar o no las recomendaciones del asesor siempre es del cliente.',
        'El asesor, sin embargo, cuenta con conocimientos técnicos y experiencia práctica para ayudar a identificar los instrumentos que mejor se alinean con tus objetivos y necesidades personales.',
        'La prestación del servicio de asesoría se realiza a través de un equipo de profesionales dedicados a la orientación, recomendación y acompañamiento técnico, de forma independiente, objetiva y personalizada, en distintos ámbitos de tu vida financiera, como: Planeación financiera, Construcción y gestión de portafolio y Protección patrimonial.',
      ],
    },
    {
      pregunta: '¿Es seguro invertir con Revolution Wealth?',
      respuesta: [
        'Revolution Wealth es una oficina afiliada a GBM – Grupo Bursátil Mexicano, la casa de bolsa más grande de México y respaldada por 40 años de historia.',
        'Desde el punto de vista de la seguridad, todas nuestras operaciones son auditadas y pasan por un riguroso proceso de gobernanza. Los riesgos de invertir están exclusivamente vinculados al tipo de activo financiero en el que asignas tus inversiones.',
      ],
    },
    {
      pregunta: '¿Revolution Wealth custodia mi dinero?',
      respuesta: [
        'No.',
        'Tus recursos permanecen siempre en tu cuenta individual dentro de la plataforma de GBM. Revolution Wealth no custodia fondos ni tiene control sobre tu dinero; nuestro rol es exclusivamente de asesoría.',
      ],
    },
    {
      pregunta: '¿Cuál es la diferencia entre invertir en un banco y con Revolution Wealth?',
      respuesta: [
        'En la banca tradicional la asesoría suele centrarse en productos estandarizados del propio banco.',
        'En Revolution Wealth brindamos asesoría independiente y personalizada, enfocada en implementar estrategias de los mejores gestores de activos alineadas a tus objetivos, perfil de riesgo y horizonte de inversión.',
      ],
    },
    {
      pregunta: '¿Cómo se contrata la asesoría?',
      respuesta: [
        'El proceso inicia con una sesión de diagnóstico. Posteriormente, se solicita la asignación de tu contrato de GBM a la asesoría de Revolution Wealth, lo que nos permite visualizar tu portafolio y brindarte recomendaciones personalizadas.',
      ],
    },
    {
      pregunta: '¿Necesito abrir una cuenta nueva?',
      respuesta: [
        'No necesariamente.',
        'Si ya cuentas con un contrato en GBM, únicamente se realiza la migración de asesoría. Si aún no tienes cuenta, te acompañamos en el proceso de apertura.',
      ],
    },
    {
      pregunta: '¿Puedo retirar mi dinero cuando quiera?',
      respuesta: [
        'Sí.',
        'Al estar tu cuenta directamente en GBM, puedes disponer de tus recursos conforme a los plazos y condiciones de los instrumentos en los que estés invertido.',
      ],
    },
    {
      pregunta: '¿Cómo cobra Revolution Wealth?',
      respuesta: [
        'La estructura de honorarios se explica de forma clara y transparente antes de iniciar la relación de asesoría. No cobramos comisiones ocultas ni incentivos por recomendar productos específicos.',
      ],
    },
    {
      pregunta: '¿Puedo dejar de recibir la asesoría?',
      respuesta: [
        'Sí.',
        'La relación de asesoría es flexible y no hay plazo mínimo de permanencia. Puedes solicitar la baja en cualquier momento y tu cuenta y recursos permanecerán siempre bajo tu control en GBM.',
      ],
    },
    {
      pregunta: '¿Cómo puedo comenzar?',
      respuesta: [
        'Solo tienes que agendar una sesión inicial. Evaluaremos tu situación, resolveremos dudas y te explicaremos el proceso paso a paso.',
      ],
    },
  ] as { pregunta: string; respuesta: string[] }[],
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
        // Mismos destinos que el footer de revolutionwm.com (Media va a la principal de Revolution)
        { label: 'Revolution Media', href: links.revolution, external: true },
        { label: 'Wealth Club', href: 'https://revoluciondelariqueza.com/wealthclub/', external: true },
        { label: 'Wealth Mastery', href: 'https://revoluciondelariqueza.com/wealthmastery', external: true },
        { label: 'Revolution Capital', href: links.capital, external: true },
      ],
    },
    {
      title: 'CONTACTO',
      links: [
        { label: 'Agenda tu sesión', href: links.agenda, external: true },
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
