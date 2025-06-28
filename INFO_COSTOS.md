# Información sobre Costos - OpenRouter

## 💰 Modelos Disponibles y sus Costos

### Modelos Económicos (Recomendados para uso personal)

#### 1. GPT-3.5 Turbo (Actual)
- **Costo**: ~$0.50 por 1M tokens
- **Ventajas**: Muy confiable, ampliamente usado
- **Para tu uso**: Muy económico para uso personal

#### 2. Claude 3 Haiku
- **Costo**: ~$0.25 por 1M tokens
- **Ventajas**: Más económico que GPT-3.5
- **Para tu uso**: Excelente opción económica

#### 3. Mistral 7B
- **Costo**: ~$0.14 por 1M tokens
- **Ventajas**: Muy económico, buen rendimiento
- **Para tu uso**: La opción más económica

### Modelos de Mayor Calidad (Más costosos)

#### 4. Claude 3 Sonnet
- **Costo**: ~$3 por 1M tokens
- **Ventajas**: Mejor calidad que Haiku

#### 5. GPT-4
- **Costo**: ~$30 por 1M tokens
- **Ventajas**: Máxima calidad

## 💡 Cómo Minimizar Costos

### Configuración Actual (Económica)
- **Modelo**: GPT-3.5 Turbo
- **Max tokens**: 300 (respuestas cortas)
- **Costo estimado**: ~$0.00015 por respuesta

### Para hacerlo aún más económico:
1. **Cambiar a Mistral 7B**: En `api/config.js` línea 12:
   ```javascript
   model: FREE_MODELS.MISTRAL_7B
   ```

2. **Reducir tokens**: En `api/config.js` línea 15:
   ```javascript
   max_tokens: 200
   ```

## 🆓 Opciones Gratuitas

### OpenRouter Free Tier
- **Créditos gratuitos**: $5 al registrarte
- **Duración**: Para siempre
- **Con esto puedes hacer**: ~10,000 respuestas con GPT-3.5

### Alternativas Completamente Gratuitas
1. **Hugging Face**: Algunos modelos gratuitos
2. **Ollama**: Modelos locales (requiere instalación)
3. **Google Colab**: Notebooks con modelos gratuitos

## 🔧 Cambiar a Modelo Más Económico

Para usar Mistral 7B (más económico), edita `api/config.js`:

```javascript
export const DEFAULT_CONFIG = {
  model: FREE_MODELS.MISTRAL_7B, // Más económico
  max_tokens: 200, // Respuestas más cortas
  temperature: 0.7
};
```

## 📊 Estimación de Costos

Con la configuración actual:
- **1 respuesta**: ~$0.00015
- **100 respuestas**: ~$0.015
- **1,000 respuestas**: ~$0.15
- **10,000 respuestas**: ~$1.50

## 🚨 Importante

- **Los costos son muy bajos** para uso personal
- **Puedes usar los $5 gratuitos** de OpenRouter
- **Si no quieres costos**, considera alternativas locales 