import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaIterativoComponent } from './mapa-iterativo';

describe('MapaIterativoComponent', () => {
  let component: MapaIterativoComponent;
  let fixture: ComponentFixture<MapaIterativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Se seu componente for Standalone (comum no Angular 21)
      imports: [MapaIterativoComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaIterativoComponent);
    component = fixture.componentInstance;
    
    // Opcional: Impedir que o Leaflet tente renderizar no ambiente de teste
    // caso ele dê erro de 'div not found'
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});