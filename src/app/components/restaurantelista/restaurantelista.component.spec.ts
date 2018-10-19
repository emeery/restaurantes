import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantelistaComponent } from './restaurantelista.component';

describe('RestaurantelistaComponent', () => {
  let component: RestaurantelistaComponent;
  let fixture: ComponentFixture<RestaurantelistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantelistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantelistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
