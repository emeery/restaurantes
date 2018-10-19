import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarestauranteComponent } from './editarestaurante.component';

describe('EditarestauranteComponent', () => {
  let component: EditarestauranteComponent;
  let fixture: ComponentFixture<EditarestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
