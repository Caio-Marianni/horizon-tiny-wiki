export default interface Machine {
  id: number;
  nome: string;
  icon: string;
  imagem: string;
  type: string;
  size: string;
  weakness: string[];
  resistance: string[];
  shortDescription: string;
  longDescription: string;
}
