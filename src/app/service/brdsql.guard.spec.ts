import { TestBed } from '@angular/core/testing';

import { BrdsqlGuard } from './brdsql.guard';

describe('BrdsqlGuard', () => {
  let guard: BrdsqlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BrdsqlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
