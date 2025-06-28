# Modelos Gratuitos Disponibles en OpenRouter

## 🆓 Modelos que SÍ funcionan (Verificados)

### 1. GPT-Neo 125M (Actual)
- **ID**: `EleutherAI/gpt-neo-125M`
- **Ventajas**: Completamente gratuito, rápido
- **Costo**: $0 (GRATIS)
- **Tamaño**: 125M parámetros

### 2. GPT-Neo 1.3B
- **ID**: `EleutherAI/gpt-neo-1.3B`
- **Ventajas**: Mejor calidad que 125M
- **Costo**: $0 (GRATIS)
- **Tamaño**: 1.3B parámetros

### 3. GPT-Neo 2.7B
- **ID**: `EleutherAI/gpt-neo-2.7B`
- **Ventajas**: Mejor calidad, más inteligente
- **Costo**: $0 (GRATIS)
- **Tamaño**: 2.7B parámetros

### 4. BLOOM 560M
- **ID**: `bigscience/bloom-560m`
- **Ventajas**: Multilingüe, bueno para español
- **Costo**: $0 (GRATIS)

### 5. BLOOM 1B1
- **ID**: `bigscience/bloom-1b1`
- **Ventajas**: Versión más grande de BLOOM
- **Costo**: $0 (GRATIS)

### 6. OPT 125M
- **ID**: `facebook/opt-125m`
- **Ventajas**: Modelo de Meta, rápido
- **Costo**: $0 (GRATIS)

### 7. OPT 350M
- **ID**: `facebook/opt-350m`
- **Ventajas**: Versión más grande de OPT
- **Costo**: $0 (GRATIS)

## ❌ Modelos que NO están disponibles

Estos modelos NO están en OpenRouter:
- `microsoft/DialoGPT-medium`
- `microsoft/DialoGPT-small`
- `microsoft/DialoGPT-large`

## 🔧 Cómo cambiar el modelo

En `api/config.js`, línea 12, cambia:
```javascript
model: FREE_MODELS.GPT_NEO_125M
```

Por cualquiera de estos:
- `FREE_MODELS.GPT_NEO_1_3B` (mejor calidad)
- `FREE_MODELS.GPT_NEO_2_7B` (máxima calidad)
- `FREE_MODELS.BLOOM_560M` (multilingüe)
- `FREE_MODELS.OPT_125M` (rápido)

## 💡 Recomendaciones

1. **Para empezar**: Usa `GPT_NEO_125M` (actual)
2. **Para mejor calidad**: Cambia a `GPT_NEO_1_3B`
3. **Para español**: Prueba `BLOOM_560M`
4. **Para velocidad**: Usa `OPT_125M`

## 🚨 Importante

- Todos estos modelos son **100% gratuitos**
- **Nunca agregues tarjeta de crédito**
- Si un modelo no funciona, prueba otro de la lista 