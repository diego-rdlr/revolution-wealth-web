# "Perfil de inversión" (/wealth/perfil) en HubSpot

Reemplaza al Microsoft Form "Cuestionario de Alta de Cliente y Perfil de Riesgo". Las preguntas y
opciones son las mismas; la página tiene el diseño de la marca y envía a HubSpot.

```
/wealth/perfil (4 pasos, diseño de la marca)
  → API pública de formularios de HubSpot (sin claves en la web)
  → HubSpot crea o actualiza el contacto (por correo) con cada respuesta
  → workflow: negocio en pipeline RWM, etapa "Llamada SDR", asociado al contacto
```

Cuenta: **Revolución de la Riqueza**, portal `51345487` (región `na1`).
Pipeline **RWM** (`913042075`) → etapa **Llamada SDR** (`1387010726`). Ya existen.

## Estado

- [x] Paso 1 · Propiedades de contacto (revisadas el 22-oct; ver nombres finales abajo)
- [ ] Paso 2 · Formulario "RWM · Perfil de inversión (web)" y su id en `src/config/hubspot.ts`
- [ ] Paso 3 · Workflow que crea el negocio
- [ ] Paso 4 · Prueba de punta a punta
- [ ] Perfil de riesgo calculado (cuando Vini pase la calificación; ver PENDIENTES.md)

---

## Paso 1 · Propiedades de contacto

**Nombres finales en HubSpot (revisados el 22-oct).** Tres quedaron distintos a la tabla original y la web ya usa estos:
- `que_harias_si_tu_inversion_pierde_10_en_un_mes` (ya existía; en lugar de `reaccion_perdida_10_rwm`)
- `te_interesa_custodia_en_eua_gbm_houston` (en lugar de `custodia_eua_rwm`)
- `tiene_contrato_gbm_rwm` y `tiene_asesor_gbm_rwm` con opción `Si` sin acento: la web muestra "Sí" y envía `Si`.

Tabla original:

Configuración (engrane) → **Propiedades** → Contacto → **Crear propiedad**. Grupo sugerido: "Revolution Wealth".
El **nombre interno** debe quedar exactamente así (la web envía esos nombres). Las opciones, letra por letra.

| Etiqueta | Nombre interno | Tipo | Opciones |
|---|---|---|---|
| País de residencia fiscal | `residencia_fiscal_rwm` | Texto de una línea | |
| ¿Cuentas con un contrato en GBM? | `tiene_contrato_gbm_rwm` | Selección (botones de opción) | `Sí` · `No` |
| CURP | `curp_rwm` | Texto de una línea · **marcar como dato sensible** (ver abajo) | |
| ¿Cuentas con un asesor en GBM? | `tiene_asesor_gbm_rwm` | Selección (botones de opción) | `Sí` · `No` |
| ¿Te interesa custodia en Estados Unidos (GBM Houston)? | `custodia_eua_rwm` | Selección | `Sí, me interesa.` · `No, la custodia en México es suficiente.` · `No estoy seguro, necesito más información.` |
| ¿Qué harías si tu inversión pierde 10% en un mes? | `reaccion_perdida_10_rwm` | Selección | `Compraría más aprovechando el precio bajo` · `Esperaría a que se recupere` · `Vendería para evitar más pérdidas` |
| ¿Cuál es tu situación financiera actual? | `situacion_financiera_rwm` | Selección | `Estable con excedente y sin deudas` · `Equilibrada, con algunas deudas manejables` · `Inestable o con alta carga de deuda` |
| Patrimonio invertible (USD, sin vivienda principal) | `patrimonio_invertible_rwm` | Selección | `Menos de USD $250,000` · `USD $250,000 – $500,000` · `USD $500,000 – $1,000,000` · `USD $1,000,000 – $3,000,000` · `USD $3,000,000 – $5,000,000` · `Más de USD $5,000,000` |
| Monto inicial a invertir con RWM (MXN) | `monto_inicial_rwm` | Número (moneda MXN) | |

**CURP como dato sensible:** al crear la propiedad, en "Sensibilidad de datos" elige **Sensible**
(requiere que la cuenta tenga activados los datos sensibles; si la opción no aparece:
Configuración → Privacidad y consentimiento → Datos sensibles). Así solo la ve quien tenga ese permiso.

Ya existen y se reusan (sus opciones coinciden con las del Microsoft Form):
`firstname`, `lastname`, `email`, `phone`, `fecha_de_nacimiento` (fecha), `cual_es_tu_edad` (la web la calcula de la fecha de nacimiento), `cual_es_tu_horizonte_de_inversion`,
`cual_es_tu_nivel_de_experiencia_en_inversiones`, `cual_es_tu_objetivo_principal_de_inversion`,
`que_porcentaje_de_tus_ingresos_estas_dispuesto_a_invertir`, `message`.

## Paso 2 · Formulario en HubSpot

1. Marketing → **Formularios** → Crear formulario → **Formulario incrustado**.
2. Nombre: `RWM · Perfil de inversión (web)`.
3. Agrega estos campos (todos, aunque la web sea la que pregunta):
   `firstname`, `lastname`, `email`, `phone`, `fecha_de_nacimiento`, `cual_es_tu_edad`
   (como campo **oculto**: la web la calcula de la fecha), `residencia_fiscal_rwm`, `tiene_contrato_gbm_rwm`, `curp_rwm`, `tiene_asesor_gbm_rwm`,
   `te_interesa_custodia_en_eua_gbm_houston`, `cual_es_tu_horizonte_de_inversion`, `cual_es_tu_nivel_de_experiencia_en_inversiones`,
   `que_harias_si_tu_inversion_pierde_10_en_un_mes`, `cual_es_tu_objetivo_principal_de_inversion`,
   `que_porcentaje_de_tus_ingresos_estas_dispuesto_a_invertir`, `situacion_financiera_rwm`,
   `patrimonio_invertible_rwm`, `monto_inicial_rwm`, `message`.
   No marques ninguno como obligatorio en HubSpot: la web valida.
4. Opciones → "Mensaje de agradecimiento": cualquiera (no se ve; la web muestra el suyo).
5. **Publicar**.
6. Compartir → Insertar → copia el valor de `formId` / `data-form-id` y ponlo en
   `src/config/hubspot.ts` → `perfilFormId`. (O pásamelo y lo conecto.)

Mientras `perfilFormId` esté vacío, la página funciona pero al enviar muestra el mensaje de error.

## Paso 3 · Workflow: negocio en RWM · Llamada SDR

Automatización → Workflows → Crear → **Basado en contactos** → desde cero.

1. **Disparador:** "Envió el formulario" → `RWM · Perfil de inversión (web)`.
   Reinscripción: **activada** (si alguien vuelve a llenarlo, se evalúa otra vez).
2. **Rama (si/no):** el contacto tiene un negocio asociado con pipeline = RWM y etapa distinta de
   "Lead perdido" → **Sí:** terminar (no duplicar). **No:** seguir.
3. **Crear registro → Negocio:**
   - Nombre: `[Nombre] [Apellidos] · RWM` (tokens de contacto)
   - Pipeline: **RWM** · Etapa: **Llamada SDR**
   - Importe: el token `Monto inicial a invertir con RWM`
   - Asociar con el contacto inscrito: **sí**
4. **(Recomendado)** Rotar propietario entre los SDR, o "Enviar notificación interna" al SDR con
   nombre, teléfono, patrimonio y monto.
5. Revisar y **Activar**.

## Paso 4 · Prueba

1. Llena `/wealth/perfil` con un correo de prueba.
2. Revisa en HubSpot: contacto con todas las respuestas, y negocio en RWM · Llamada SDR asociado.
3. Si la web muestra error, abre la consola del navegador: el mensaje de HubSpot dice qué campo
   falló (casi siempre un nombre interno o una opción que no coincide letra por letra).
4. Borra el contacto y el negocio de prueba.
