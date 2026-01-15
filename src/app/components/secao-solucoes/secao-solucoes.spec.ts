import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoSolucoes } from './secao-solucoes';

describe('SecaoSolucoes', () => {
  let component: SecaoSolucoes;
  let fixture: ComponentFixture<SecaoSolucoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoSolucoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoSolucoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
