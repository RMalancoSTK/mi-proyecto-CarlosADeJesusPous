import { TestBed } from '@angular/core/testing';

import { AutehnticationGuard } from './autehntication.guard';

describe('AutehnticationGuard', () => {
  let guard: AutehnticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutehnticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
