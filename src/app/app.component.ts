import { Component, signal } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho';
import { RodapeComponente } from './componentes/rodape/rodape';

import { ListaLivros } from './componentes/lista-livros/lista-livros';
import { GeneroLiterario } from './componentes/genero-literario/genero-literario';

import { Genero } from './componentes/genero-literario/generointerface';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponente,
    ListaLivros,
    GeneroLiterario
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('Organo');

  algumGenero: Genero = {
    id: 'Misterio',
    value: 'Misterio',
    livros: []
  };
}
