import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNovaSalaComponent } from './formulario-nova-sala.component';

describe('FormularioNovaSalaComponent', () => {
  let component: FormularioNovaSalaComponent;
  let fixture: ComponentFixture<FormularioNovaSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNovaSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNovaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
