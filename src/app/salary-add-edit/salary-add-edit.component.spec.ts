import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAddEditComponent } from './salary-add-edit.component';

describe('SalaryAddEditComponent', () => {
  let component: SalaryAddEditComponent;
  let fixture: ComponentFixture<SalaryAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
