import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaCriadaComponent } from './sala-criada.component';

describe('SalaCriadaComponent', () => {
  let component: SalaCriadaComponent;
  let fixture: ComponentFixture<SalaCriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaCriadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaCriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
