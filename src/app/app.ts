import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Rodape } from './components/rodape/rodape';
import { SecaoContato } from './components/secao-contato/secao-contato';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { SecaoHero } from './components/secao-hero/secao-hero';
import { SecaoLocalizacao } from './components/secao-localizacao/secao-localizacao';
import { SecaoSobre } from './components/secao-sobre/secao-sobre';
import { SecaoSolucoes } from './components/secao-solucoes/secao-solucoes';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Cabecalho,
    Home,
    SecaoContato,
    SecaoHero,
    SecaoLocalizacao,
    SecaoSobre,
    SecaoSolucoes,
    Rodape
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('site-vibe-code');
}
