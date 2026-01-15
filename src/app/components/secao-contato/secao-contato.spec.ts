import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoContato } from './secao-contato';

describe('SecaoContato', () => {
  let component: SecaoContato;
  let fixture: ComponentFixture<SecaoContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
