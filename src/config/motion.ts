/**
 * Interruptor de las animaciones del sitio.
 *
 * true  → titulares que aparecen por renglones, datos que se dibujan solos
 *         y scroll suave en escritorio.
 * false → la página queda 100% estática, idéntica al diseño de Figma.
 *         El JavaScript de animación no se carga y el CSS queda inerte
 *         (todas sus reglas dependen de una clase que ya no se pone).
 *
 * Es el "rollback" rápido: cambiar este valor, hacer merge y listo.
 */
export const MOTION_ENABLED = true;
