import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMascota } from './card-mascota';

describe('CardMascota', () => {
  let component: CardMascota;
  let fixture: ComponentFixture<CardMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
