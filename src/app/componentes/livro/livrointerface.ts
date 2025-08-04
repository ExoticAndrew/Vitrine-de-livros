import { Genero } from "../genero-literario/generointerface";

export interface Livro {
  titulo: string;
  autoria: string;
  imagem: string;
  favorito: boolean;
  genero: Genero; 
}
