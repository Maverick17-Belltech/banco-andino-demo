# Banco & Seguros Belltech — Sitio demo para NiCE Cognigy

Sitio estático, responsive (desktop / tablet / mobile), con estructura típica de banca online:
segmentos (Personas/Empresas/Pymes), menú con desplegables y menú hamburguesa en mobile, carrusel de banners,
**Banca Online (login)**, accesos rápidos, productos, seguros, canales de contacto, ayuda y footer.
**Sofía** aparece como globito flotante para hacerle una pregunta (con atajos), y se integra por webchat, voz y email.

## Archivos
- `index.html` — el sitio.
- `config.js` — URLs de endpoints (Webchat, Voice Gateway, REST). **Si ya tenés tu config.js con el token, no lo reemplaces.** Opcional: cambiá `PRIMARY_COLOR` a `"#2A1B6E"` para que el webchat use el violeta de la marca.

## Banca Online (login simulado)
Clave: `Demo1234@`
| Email | DNI | Fecha nac. | Póliza |
|---|---|---|---|
| sebastian.sosa@belltech.la | 29018611 | 17-07-1981 | IOU-112233 |
| patricia.vinyolas@gmail.com | 27933366 | 26-02-1980 | AES-345678 |

Al iniciar sesión, el webchat envía `input.data = { authenticated, dni, fecha_nacimiento, nombre, email, poliza }`
y el nodo `auth_web` de Cognigy valida al cliente: Sofía no vuelve a pedir identificación.

Sin login, Sofía valida con DNI + fecha (ej. `30123456` / `15-03-1985`).

> Login simulado del lado del navegador (la clave se ve en el código). Solo para demo. Entidad ficticia.

## Publicar / actualizar en GitHub Pages
Reemplazá `index.html` y `README.md` en el repo → Commit → esperar 1–2 min → Ctrl+F5.
