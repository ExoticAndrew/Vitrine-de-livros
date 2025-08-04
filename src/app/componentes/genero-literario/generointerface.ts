import { Livro } from '../livro/livrointerface';

export interface Genero {
  id: string;
  value: string;
  livros: Livro[]; 
}
