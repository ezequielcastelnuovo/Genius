export default async function handler(req, res) {
  const { tema } = req.body;

  if (!tema) {
    return res.status(400).json({ message: "El tema es requerido" });
  }

  const prompt = `Hazme una serie de preguntas crecientes sobre el tema "${tema}", comenzando por lo más básico y llevándome gradualmente a razonar por mí mismo conceptos avanzados.`;

  // Verificar si la API key está configurada
  if (!process.env.OPENROUTER_API_KEY) {
    console.error("❌ OPENROUTER_API_KEY no está configurada");
    return res.status(500).json({ message: "Error de configuración: API key no encontrada" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://genius-ten-orpin.vercel.app", // importante que coincida con el dominio
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();
    console.log("🔍 Respuesta completa:", data); // --> esto ayuda a debuggear

    if (!response.ok) {
      console.error("❌ Error de API:", data);
      return res.status(response.status).json({ 
        message: `Error de API: ${data.error?.message || 'Error desconocido'}` 
      });
    }

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error("❌ Respuesta inválida:", data);
      return res.status(500).json({ message: "Error en la respuesta de la IA." });
    }

    res.status(200).json({ respuesta: data.choices[0].message.content });
  } catch (err) {
    console.error("🔥 Error:", err);
    res.status(500).json({ message: `Error al conectar con la IA: ${err.message}` });
  }
}
