import { TestBed } from '@angular/core/testing';

import { BankingRequestService } from './banking-request.service';

describe('BankingRequestService', () => {
  let service: BankingRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
