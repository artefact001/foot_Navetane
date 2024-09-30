import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { zoneGuard } from './zone.guard';

describe('zoneGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => zoneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
