import { TestBed } from '@angular/core/testing';

import { WikepediaService } from './wikepedia.service';

describe('WikepediaService', () => {
  let service: WikepediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikepediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
