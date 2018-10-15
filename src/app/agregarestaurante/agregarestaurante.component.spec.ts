import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarestauranteComponent } from './agregarestaurante.component';

describe('AgregarestauranteComponent', () => {
  let component: AgregarestauranteComponent;
  let fixture: ComponentFixture<AgregarestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
