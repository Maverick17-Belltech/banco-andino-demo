# Banco Andino & Seguros — Sitio demo para NiCE Cognigy

Sitio estático (sin build) que simula la web de un banco/aseguradora ficticio e integra el agente de IA **Sofía** por tres canales:

| Canal | Cómo se integra | Endpoint de Cognigy |
|---|---|---|
| 💬 Webchat | Script oficial Webchat v3 (`initWebchat`) | Webchat v3 |
| 📞 Click to Call | Click To Call SDK (WebRTC) cargado desde esm.sh | Voice Gateway |
| ✉️ Email (simulado) | Formulario → `POST` al endpoint REST; Sofía responde con la tool **Send Email** | REST |

## Archivos

- `index.html` — el sitio.
- `config.js` — **lo único que tenés que editar**: las 3 URLs de endpoints.

## 1. Publicar en GitHub Pages

1. En GitHub: **New repository** → nombre `banco-andino-demo` → **Public** → *Create*.
2. **Add file → Upload files** → arrastrá `index.html`, `config.js` y `README.md` → *Commit changes*.
3. **Settings → Pages** → *Source*: **Deploy from a branch** → *Branch*: `main` / `(root)` → **Save**.
4. En 1–2 minutos queda en `https://<tu-usuario>.github.io/banco-andino-demo/`.

> GitHub Pages sirve por **HTTPS**, requisito para el micrófono del Click to Call.

## 2. Completar `config.js`

```js
WEBCHAT_CONFIG_URL: "https://endpoint-trial.cognigy.ai/<token-webchat>",
VOICE_ENDPOINT_URL: "https://endpoint-trial.cognigy.ai/<token-voz>",   // wss://.../voiceGateway -> https://...
REST_ENDPOINT_URL:  "https://endpoint-trial.cognigy.ai/<token-rest>",  // vacío = oculta el formulario de email
```

Editalo directamente en GitHub (ícono del lápiz) y hacé commit; Pages se actualiza solo.

## 3. Ajustes en Cognigy

**Webchat v3**: en el endpoint, en *Allowed Origins / Domain whitelist* (si está activo) agregá `https://<tu-usuario>.github.io`.

**Click to Call**: crear endpoint **Voice Gateway** apuntando al Flow de Sofía, con STT/TTS en español. Si la llamada falla, revisar que el tenant tenga Voice Gateway habilitado y que la red permita WebSocket/UDP.

**Email (simulado)**:
1. Crear endpoint **REST** apuntando al Flow de Sofía (sin API key para la demo).
2. Agregar al Job de Sofía la tool **Send Email**.
3. En las Instructions del Job: *"Si `input.data.channel` es `email`, respondé la consulta y enviá la respuesta con Send Email a `input.data.email` usando el asunto `input.data.asunto`."*
4. Si el navegador bloquea el envío por **CORS**, la alternativa es un pequeño proxy (Cloudflare Worker / Azure Function) entre el sitio y el endpoint REST.

## Login simulado (Home Banking)

Clave para ambos: `Demo1234@`. Al iniciar sesión, el webchat envía en `input.data`:
`{ authenticated: true, dni, fecha_nacimiento, nombre, email, poliza }`. En Cognigy, el nodo Code `auth_web` valida DNI + fecha contra la misma tabla de clientes y Sofía no vuelve a pedir identificación.

| Email (login) | DNI | Fecha nac. | Póliza |
|---|---|---|---|
| sebastian.sosa@belltech.la | 29018611 | 17-07-1981 | IOU-112233 |
| patricia.vinyolas@gmail.com | 27933366 | 26-02-1980 | AES-345678 |

Solo por chat (sin login): Juan Pérez `30123456` / `15-03-1985`, María Gómez `28987654` / `02-11-1979`.

> Login simulado del lado del navegador: no es seguridad real (la clave se ve en el código fuente). Solo para demo.
