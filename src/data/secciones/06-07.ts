/**
 * Copy de las secciones 06 (Filosofía Core-X) y 07 (Fundadores),
 * tal como está en Figma (página "04b Wealth · Revolution WM").
 */
import type { Title } from '../wealth';

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
