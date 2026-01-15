import { Component } from '@angular/core';
import { MapaIterativoComponent } from '../mapa-iterativo/mapa-iterativo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secao-localizacao',
  imports: [
    CommonModule,
    MapaIterativoComponent],
  templateUrl: './secao-localizacao.html',
  styleUrl: './secao-localizacao.css',
})
export class SecaoLocalizacao {

}
