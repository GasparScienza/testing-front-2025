import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTurn } from './reserve-turn';

describe('ReserveTurn', () => {
  let component: ReserveTurn;
  let fixture: ComponentFixture<ReserveTurn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveTurn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveTurn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
