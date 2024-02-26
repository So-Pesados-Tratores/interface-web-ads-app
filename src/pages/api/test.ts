import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

// Simulação de uma função que renova a URL da imagem
// Você precisará substituir isso pela lógica real que interage com a API do seu serviço de armazenamento
async function renovarURL(urlExpirada: string): Promise<string> {
  // Implemente a lógica de renovação de URL aqui
  // Por exemplo, fazer uma solicitação à API do seu serviço de armazenamento para obter uma nova URL
  return urlExpirada; // Retorne a nova URL renovada
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { url } = req.query;

  if (typeof url !== 'string' || !url) {
    return res.status(400).json({ error: 'URL da imagem inválida ou não fornecida.' });
  }

  try {
    let imageResponse = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PIPEFY_API_TOKEN}`
      }
    });

    // Tenta renovar a URL se a resposta for não autorizada ou não encontrada
    if (!imageResponse.ok && (imageResponse.status === 401 || imageResponse.status === 403 || imageResponse.status === 404)) {
      const urlRenovada = await renovarURL(url);
      imageResponse = await fetch(urlRenovada, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PIPEFY_API_TOKEN}`
        }
      });
    }

    if (!imageResponse.ok) {
      throw new Error(`Erro após renovar URL: ${imageResponse.statusText}`);
    }

    const imageBuffer = await imageResponse.buffer();
    const contentType = imageResponse.headers.get('content-type') || 'application/octet-stream';

    res.setHeader('Content-Type', contentType);
    res.send(imageBuffer);
  } catch (error) {
    console.error('Erro no proxy de imagem:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
