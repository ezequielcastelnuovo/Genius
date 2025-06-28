// Configuración para modelos gratuitos en OpenRouter
export const FREE_MODELS = {
  // Modelos completamente gratuitos
  DIALOGPT_MEDIUM: "microsoft/DialoGPT-medium",
  DIALOGPT_SMALL: "microsoft/DialoGPT-small", 
  DIALOGPT_LARGE: "microsoft/DialoGPT-large",
  GPT_NEO_125M: "EleutherAI/gpt-neo-125M",
  GPT_NEO_1_3B: "EleutherAI/gpt-neo-1.3B"
};

// Configuración por defecto para uso gratuito
export const DEFAULT_CONFIG = {
  model: FREE_MODELS.DIALOGPT_MEDIUM,
  max_tokens: 500,
  temperature: 0.7
};

// Función para verificar si un modelo es gratuito
export function isFreeModel(modelId) {
  return Object.values(FREE_MODELS).includes(modelId);
}

// Lista de modelos de pago para evitar
export const PAID_MODELS = [
  "anthropic/claude-3-haiku",
  "anthropic/claude-3-sonnet", 
  "openai/gpt-3.5-turbo",
  "openai/gpt-4",
  "openai/gpt-4-turbo"
]; 