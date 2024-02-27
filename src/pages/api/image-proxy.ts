import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { buscarProdutosAtualizados } from "../../services/getUpdatedImageUrls";

// Cache para armazenar as URLs das imagens e o horário da última atualização
let cache: { [url: string]: { url: string; lastUpdated: number } } = {};

// Função para atualizar o cache com as novas URLs
async function atualizarCache() {
  const novasUrls = await buscarProdutosAtualizados();
  const currentTime = Date.now();
  novasUrls.forEach((url) => {
    cache[url] = { url, lastUpdated: currentTime };
  });
}

// Verifica se uma URL está no cache e se está atualizada
function isUrlValid(url: string) {
  const cachedUrl = cache[url];
  if (!cachedUrl) return false; // URL não está no cache
  const currentTime = Date.now();
  return currentTime - cachedUrl.lastUpdated <= 15 * 60 * 1000; // Verifica se a URL foi atualizada nos últimos 15 minutos
}

// Função para buscar uma imagem com uma URL
async function fetchImage(url: string) {
  return await fetch(url);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { url } = req.query;

  if (typeof url !== "string" || !url) {
    return res
      .status(400)
      .json({ error: "URL da imagem inválida ou não fornecida." });
  }

  // Verifica se a URL está no cache e se está atualizada
  if (!isUrlValid(url)) {
    // Atualiza o cache
    await atualizarCache();
  }

  // Tenta servir a imagem usando a URL fornecida
  let imageResponse = await fetchImage(url);

  if (!imageResponse.ok) {
    // Se ainda assim houver um erro, retorna um erro
    console.error(`Erro ao acessar a imagem.`);
    return res.status(404).json({ error: "Imagem não encontrada." });
  }

  // Se a imagem for obtida com sucesso, envia-a na resposta
  const imageBuffer = await imageResponse.buffer();
  const contentType =
    imageResponse.headers.get("content-type") || "application/octet-stream";
  res.setHeader("Content-Type", contentType);
  res.send(imageBuffer);
}

// Executa a função de atualização do cache a cada 15 minutos
setInterval(atualizarCache, 15 * 60 * 1000);
