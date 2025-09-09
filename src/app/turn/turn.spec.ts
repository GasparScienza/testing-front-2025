import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Turn } from './turn';

describe('Turn', () => {
  let component: Turn;
  let fixture: ComponentFixture<Turn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Turn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Turn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
