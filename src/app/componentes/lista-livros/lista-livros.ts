import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro/livrointerface';
import { livros } from '../../mock-livros';
import { GeneroLiterario } from '../genero-literario/genero-literario'; 
import { CommonModule } from '@angular/common';

interface Genero {
  id: string;
  value: string;
  livros: Livro[];
}

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [GeneroLiterario, CommonModule],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css'
})
export class ListaLivros implements OnInit {
  generos: Genero[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit() {
  
    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    this.generos = [
      { id: 'romance', value: 'Romance', livros: this.livrosPorGenero.get('romance') ?? [] },
      { id: 'misterio', value: 'Mistério', livros: this.livrosPorGenero.get('misterio') ?? [] },
      { id: 'fantasia', value: 'Fantasia', livros: this.livrosPorGenero.get('fantasia') ?? [] },
      { id: 'ficcao-cientifica', value: 'Ficção Científica', livros: this.livrosPorGenero.get('ficcao-cientifica') ?? [] },
      { id: 'tecnicos', value: 'Técnicos', livros: this.livrosPorGenero.get('tecnicos') ?? [] },
      { id: 'distopia', value: 'Distopia', livros: this.livrosPorGenero.get('distopia') ?? [] },
      { id: 'classico', value: 'Clássico Brasileiro', livros: this.livrosPorGenero.get('classico') ?? [] }
    ];

    this.generos = this.generos.filter(g => g.livros.length > 0);
  }
}
