import { Component, Input } from '@angular/core';
import { Livro } from './livrointerface';

@Component({
  selector: 'app-livro',
  standalone: true,
  templateUrl: './livro.html',
  styleUrls: ['./livro.css']
})
export class LivroComponente {
  @Input() livro!: Livro;

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }
}
