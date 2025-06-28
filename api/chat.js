export default async function handler(req, res) {
  const { topic } = req.body;

  const prompt = `Hazme una serie de preguntas crecientes sobre el tema "${topic}", comenzando por lo más básico y llevándome gradualmente a razonar por mí mismo conceptos avanzados.`;

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

    if (!response.ok || !data.choices || !data.choices[0]?.message?.content) {
      return res.status(500).json({ message: "Error en la respuesta de la IA." });
    }

    res.status(200).json({ message: data.choices[0].message.content });
  } catch (err) {
    console.error("🔥 Error:", err);
    res.status(500).json({ message: "Error al conectar con la IA." });
  }
}
