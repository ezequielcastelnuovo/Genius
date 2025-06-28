// Configuración para modelos gratuitos en OpenRouter
export const FREE_MODELS = {
  // Modelos completamente gratuitos que SÍ están disponibles
  GPT_NEO_125M: "EleutherAI/gpt-neo-125M",
  GPT_NEO_1_3B: "EleutherAI/gpt-neo-1.3B",
  GPT_NEO_2_7B: "EleutherAI/gpt-neo-2.7B",
  BLOOM_560M: "bigscience/bloom-560m",
  BLOOM_1B1: "bigscience/bloom-1b1",
  OPT_125M: "facebook/opt-125m",
  OPT_350M: "facebook/opt-350m"
};

// Configuración por defecto para uso gratuito
export const DEFAULT_CONFIG = {
  model: FREE_MODELS.GPT_NEO_125M, // Modelo gratuito que SÍ funciona
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
  "openai/gpt-4-turbo",
  "microsoft/DialoGPT-medium", // Este no está disponible
  "microsoft/DialoGPT-small",
  "microsoft/DialoGPT-large"
]; 