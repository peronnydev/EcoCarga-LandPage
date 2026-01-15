import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoSobre } from './secao-sobre';

describe('SecaoSobre', () => {
  let component: SecaoSobre;
  let fixture: ComponentFixture<SecaoSobre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoSobre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoSobre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
