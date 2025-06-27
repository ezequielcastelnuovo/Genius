// api/chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { tema } = req.body;

  const promptBase = "Hazme una serie de preguntas crecientes sobre un tema que quiero aprender, comenzando por lo más básico y llevándome gradualmente a razonar por mí mismo conceptos avanzados.";
  const mensaje = `${promptBase} Tema: ${tema}`;

  try {
    const respuesta = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: mensaje }]
      })
    });

    const data = await respuesta.json();
    res.status(200).json({ respuesta: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Error al conectar con OpenRouter" });
  }
}
