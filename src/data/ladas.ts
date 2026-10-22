// Ladas del campo de teléfono en /perfil. México va primero y es la opción por defecto;
// luego Norteamérica y España, y el resto de LatAm y Europa por nombre.
export type Lada = { iso: string; pais: string; codigo: string; bandera: string };

export const ladas: Lada[] = [
  { iso: 'MX', pais: 'México', codigo: '52', bandera: '🇲🇽' },
  { iso: 'US', pais: 'Estados Unidos', codigo: '1', bandera: '🇺🇸' },
  { iso: 'CA', pais: 'Canadá', codigo: '1', bandera: '🇨🇦' },
  { iso: 'ES', pais: 'España', codigo: '34', bandera: '🇪🇸' },
  { iso: 'AR', pais: 'Argentina', codigo: '54', bandera: '🇦🇷' },
  { iso: 'BO', pais: 'Bolivia', codigo: '591', bandera: '🇧🇴' },
  { iso: 'BR', pais: 'Brasil', codigo: '55', bandera: '🇧🇷' },
  { iso: 'CL', pais: 'Chile', codigo: '56', bandera: '🇨🇱' },
  { iso: 'CO', pais: 'Colombia', codigo: '57', bandera: '🇨🇴' },
  { iso: 'CR', pais: 'Costa Rica', codigo: '506', bandera: '🇨🇷' },
  { iso: 'EC', pais: 'Ecuador', codigo: '593', bandera: '🇪🇨' },
  { iso: 'SV', pais: 'El Salvador', codigo: '503', bandera: '🇸🇻' },
  { iso: 'GT', pais: 'Guatemala', codigo: '502', bandera: '🇬🇹' },
  { iso: 'HN', pais: 'Honduras', codigo: '504', bandera: '🇭🇳' },
  { iso: 'NI', pais: 'Nicaragua', codigo: '505', bandera: '🇳🇮' },
  { iso: 'PA', pais: 'Panamá', codigo: '507', bandera: '🇵🇦' },
  { iso: 'PY', pais: 'Paraguay', codigo: '595', bandera: '🇵🇾' },
  { iso: 'PE', pais: 'Perú', codigo: '51', bandera: '🇵🇪' },
  { iso: 'PR', pais: 'Puerto Rico', codigo: '1', bandera: '🇵🇷' },
  { iso: 'DO', pais: 'República Dominicana', codigo: '1', bandera: '🇩🇴' },
  { iso: 'UY', pais: 'Uruguay', codigo: '598', bandera: '🇺🇾' },
  { iso: 'VE', pais: 'Venezuela', codigo: '58', bandera: '🇻🇪' },
  { iso: 'DE', pais: 'Alemania', codigo: '49', bandera: '🇩🇪' },
  { iso: 'FR', pais: 'Francia', codigo: '33', bandera: '🇫🇷' },
  { iso: 'IT', pais: 'Italia', codigo: '39', bandera: '🇮🇹' },
  { iso: 'PT', pais: 'Portugal', codigo: '351', bandera: '🇵🇹' },
  { iso: 'GB', pais: 'Reino Unido', codigo: '44', bandera: '🇬🇧' },
  { iso: 'CH', pais: 'Suiza', codigo: '41', bandera: '🇨🇭' },
];
