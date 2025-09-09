import { TestBed } from '@angular/core/testing';

import { Turn } from './turn';

describe('Turn', () => {
  let service: Turn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Turn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
