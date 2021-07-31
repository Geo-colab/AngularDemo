import { TestBed } from '@angular/core/testing';

import { SalaryAddEditGuard } from './salary-add-edit.guard';

describe('SalaryAddEditGuard', () => {
  let guard: SalaryAddEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalaryAddEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
