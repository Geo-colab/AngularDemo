import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Salary } from '../models/salary.model';

@Component({
  selector: 'ad-salary-add-edit',
  templateUrl: './salary-add-edit.component.html',
  styleUrls: ['./salary-add-edit.component.css']
})

export class SalaryAddEditComponent implements OnInit {

  salaryForm: FormGroup;
  salary: Salary;
  private sub: Subscription;

  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {

    //Initialize salaryForm with its FormControls
    this.salaryForm = this.fb.group({

      companyName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      timePeriod: ['', [Validators.required]],  
      taxYear: '',  
      taxMonth: '', 
      taxDayDay: '', 
      taxDayMonth: '', 
      taxDayYear: '', 
      salaryAmount: [null, [Validators.required, Validators.min(0.01), Validators.max(1000000)]], 
      currencyCode: ['', Validators.required]
    })

  }

  //Display saved values on save click
  save() {
    console.log(this.salaryForm);
    console.log('Saved: ' + JSON.stringify(this.salaryForm.value));
  }

 
}
