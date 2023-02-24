import { TestBed } from '@angular/core/testing';

import { SalaryBracketService } from './salary-bracket.service';

describe('SalaryBracketService', () => {
  let service: SalaryBracketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryBracketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
