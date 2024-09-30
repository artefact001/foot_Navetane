import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tirageGuard } from './tirage.guard';

describe('tirageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tirageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
