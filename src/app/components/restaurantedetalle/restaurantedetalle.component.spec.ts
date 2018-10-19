import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantedetalleComponent } from './restaurantedetalle.component';

describe('RestaurantedetalleComponent', () => {
  let component: RestaurantedetalleComponent;
  let fixture: ComponentFixture<RestaurantedetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantedetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantedetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
