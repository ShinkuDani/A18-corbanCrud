import { TestBed } from '@angular/core/testing';

import { CorbanServiceService } from './corban-service.service';

describe('CorbanServiceService', () => {
  let service: CorbanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorbanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
