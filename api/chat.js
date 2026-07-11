// Función serverless de Vercel (Node.js runtime).
// Recibe el historial de mensajes del chat y responde usando Gemini 2.5 Flash.
// Requiere la variable de entorno GEMINI_API_KEY configurada en Vercel.

const SYSTEM_PROMPT = `Eres el asistente virtual de "Joyas Mágicas", una joyería de lujo en Costa Rica cuyo lema es "Donde la elegancia se convierte en magia".

Tu rol:
- Ayudar a los clientes a encontrar la pieza ideal (anillos, collares, aretes, pulseras, relojes, piezas a la medida).
- Responder dudas sobre materiales (oro 18k, platino, diamantes, piedras preciosas), cuidado de joyas, y proceso de compra.
- Ser cálido, elegante y cercano, sin sonar robótico. Usa un tono sofisticado pero amable, como un asesor de joyería de confianza.
- Si preguntan por precios exactos o disponibilidad en tiempo real, invita a escribir por WhatsApp o visitar la tienda para confirmar detalles.
- Si preguntan por piezas a la medida, explica que se puede diseñar una pieza personalizada (metal, piedra, grabado) mediante cotización.
- Mantén las respuestas breves (2-4 oraciones), claras y en español.
- Nunca inventes información específica de inventario que no tengas; en ese caso, sugiere contactar directamente.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Falta configurar GEMINI_API_KEY en el servidor' });
  }

  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Se requiere un arreglo de mensajes' });
    }

    // Convertir historial al formato de Gemini
    const contents = messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 400,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API error:', errText);
      return res.status(502).json({ error: 'Error al conectar con el asistente de IA' });
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Disculpa, no pude generar una respuesta en este momento. ¿Podrías reformular tu pregunta?';

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat handler error:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
