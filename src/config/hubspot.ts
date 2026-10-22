/**
 * Formulario "Perfil de inversión" (/wealth/perfil) → HubSpot.
 *
 * La página tiene su propio diseño y envía las respuestas a la API pública de formularios
 * de HubSpot (no lleva claves). HubSpot crea o actualiza el contacto y un workflow crea
 * el negocio en el pipeline RWM, etapa "Llamada SDR".
 *
 * - portalId y region: cuenta de HubSpot de Revolución de la Riqueza.
 * - perfilFormId: se copia del formulario en HubSpot (Marketing → Formularios → el formulario
 *   → Compartir → Insertar: valor de data-form-id). Vacío = el formulario aún no está conectado.
 *
 * Paso a paso de la configuración en HubSpot: docs/HUBSPOT-PERFIL.md
 */
export const HUBSPOT = {
  portalId: '51345487',
  region: 'na1',
  /** "RWM · Perfil de inversión (web)" (link para compartir: ukifj.share.hsforms.com/21a3JzSjsRWKuvxxvcbcplw) */
  perfilFormId: 'd5adc9cd-28ec-4562-aebf-1c6f71b72997',
};

export const hubspotSubmitUrl = (formId: string) =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT.portalId}/${formId}`;
