import { TestBed } from '@angular/core/testing';

import { WeaterService } from './weater.service';

describe('WeaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeaterService = TestBed.get(WeaterService);
    expect(service).toBeTruthy();
  });
});
