import { TestBed } from '@angular/core/testing';

import { HardcidedAuthService } from './hardcided-auth.service';

describe('HardcidedAuthService', () => {
  let service: HardcidedAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcidedAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
