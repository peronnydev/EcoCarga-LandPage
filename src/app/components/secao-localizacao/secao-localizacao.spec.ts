import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoLocalizacao } from './secao-localizacao';

describe('SecaoLocalizacao', () => {
  let component: SecaoLocalizacao;
  let fixture: ComponentFixture<SecaoLocalizacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoLocalizacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoLocalizacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
