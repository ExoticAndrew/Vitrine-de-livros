import { Component, input } from '@angular/core';
import { LivroComponente } from '../livro/livro';
import { livros } from '../../mock-livros';
import { CommonModule } from '@angular/common';
import { Genero } from './generointerface';
import { Livro } from '../livro/livrointerface';

@Component({
  selector: 'app-genero-literario',
  standalone: true,
  imports: [CommonModule, LivroComponente],
  templateUrl: './genero-literario.html',
  styleUrls: ['./genero-literario.css']
})
export class GeneroLiterario {
  genero = input.required<Genero>();
  todosOsLivros = livros;

  get livrosDoGenero(): Livro[] {
    const filtrados = this.todosOsLivros.filter(
      livro => livro.genero.id === this.genero().id
    );
    console.log(`Livros encontrados para categoria "${this.genero().id}":`, filtrados);
    return filtrados;
  }
}
