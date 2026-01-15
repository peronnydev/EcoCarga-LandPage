import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa-iterativo',
  templateUrl: './mapa-iterativo.html',
  styleUrls: ['./mapa-iterativo.css']
})
export class MapaIterativoComponent implements AfterViewInit {
  private map: any;

  // Sedes da empresa
  private sedes = [
    { nome: "Ponta do Seixas", lat: -7.1473, lng: -34.7969 },
    { nome: "Farol do Cabo Branco", lat: -7.1477, lng: -34.7984 },
    { nome: "Busto de Tamandaré", lat: -7.1192, lng: -34.8231 },
    { nome: "Parque Solon de Lucena (Lagoa)", lat: -7.1205, lng: -34.8812 },
    { nome: "Hotel Globo (Centro Histórico)", lat: -7.1147, lng: -34.8899 },
    { nome: "Estação Cabo Branco", lat: -7.1481, lng: -34.8021 },
    { nome: "Mercado de Artesanato Paraibano", lat: -7.1152, lng: -34.8258 },
    { nome: "Jardim Botânico Benjamin Maranhão", lat: -7.1408, lng: -34.8601 },
    { nome: "Mangabeira Shopping", lat: -7.1633, lng: -34.8385 },
    { nome: "Praça da Independência", lat: -7.1234, lng: -34.8711 }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Inicializa o mapa na div com id 'map'
    this.map = L.map('map', {
      center: [-7.1150, -34.8631],
      zoom: 12
    });

    // Adiciona as camadas do OpenStreetMap
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    // Adiciona os marcadores
    this.sedes.forEach(sede => {
      const marker = L.marker([sede.lat, sede.lng]);
      marker.bindPopup(`<b>${sede.nome}</b>`);
      marker.addTo(this.map);
    });
    
    // IMPORTANTE: Força o redimensionamento para evitar que o mapa apareça "cortado"
    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);
  }
}