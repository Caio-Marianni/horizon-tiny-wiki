export default interface Machine {
  id: number;
  nome: string;
  icon: string;
  imagem: string;
  weakness: string[];
  resistance: string[];
  shortDescription: string;
  longDescription: string;
}
