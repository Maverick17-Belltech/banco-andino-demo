// =====================================================================
//  CONFIGURACIÓN DE LA DEMO - completá solo estos 3 valores
//  (todas son URLs públicas de endpoints de Cognigy, no van claves acá)
// =====================================================================
window.DEMO_CONFIG = {
  // 1) Webchat v3 -> Deploy > Endpoints > Webchat > "Config URL"
  WEBCHAT_CONFIG_URL: "https://endpoint-trial.cognigy.ai/PEGAR_TOKEN_WEBCHAT",

  // 2) Click to Call -> Endpoint de Voice Gateway > "Endpoint URL"
  //    Convertir: wss://endpoint-trial.cognigy.ai/<token>/voiceGateway
  //          ->   https://endpoint-trial.cognigy.ai/<token>
  VOICE_ENDPOINT_URL: "https://endpoint-trial.cognigy.ai/PEGAR_TOKEN_VOZ",

  // 3) Email (simulado) -> Endpoint REST > "Endpoint URL"
  //    Dejar vacío ("") para ocultar el formulario hasta configurarlo.
  REST_ENDPOINT_URL: "",

  // Color principal de la marca (webchat y sitio)
  PRIMARY_COLOR: "#0B3D91"
};
