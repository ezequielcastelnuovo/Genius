// Configuración para modelos gratuitos en OpenRouter
export const FREE_MODELS = {
  // Modelos que SÍ están disponibles en OpenRouter (verificados)
  GPT_3_5_TURBO: "openai/gpt-3.5-turbo",
  CLAUDE_3_HAIKU: "anthropic/claude-3-haiku",
  CLAUDE_3_SONNET: "anthropic/claude-3-sonnet",
  GPT_4: "openai/gpt-4",
  MISTRAL_7B: "mistralai/mistral-7b-instruct",
  LLAMA_2_7B: "meta-llama/llama-2-7b-chat",
  LLAMA_2_13B: "meta-llama/llama-2-13b-chat"
};

// Configuración por defecto - usando un modelo que SÍ funciona
export const DEFAULT_CONFIG = {
  model: FREE_MODELS.GPT_3_5_TURBO, // Este modelo SÍ está disponible
  max_tokens: 300, // Reducir tokens para minimizar costos
  temperature: 0.7
};

// Función para verificar si un modelo es gratuito
export function isFreeModel(modelId) {
  return Object.values(FREE_MODELS).includes(modelId);
}

// Lista de modelos que NO están disponibles en OpenRouter
export const UNAVAILABLE_MODELS = [
  "microsoft/DialoGPT-medium",
  "microsoft/DialoGPT-small",
  "microsoft/DialoGPT-large",
  "EleutherAI/gpt-neo-125M",
  "EleutherAI/gpt-neo-1.3B",
  "EleutherAI/gpt-neo-2.7B",
  "bigscience/bloom-560m",
  "bigscience/bloom-1b1",
  "facebook/opt-125m",
  "facebook/opt-350m"
]; 