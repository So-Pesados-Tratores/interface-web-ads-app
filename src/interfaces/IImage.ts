export interface IImage {
  id?: string; // Opcional se nem sempre for necessário
  filename?: string; // Opcional se nem sempre for necessário
  url: string; // A URL da imagem, agora obrigatória
}
