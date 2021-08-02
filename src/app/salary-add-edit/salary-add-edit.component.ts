import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormDay } from '../models/form-day.model';
import { FormMonth } from '../models/form-month.model';
import { FormPeriod } from '../models/form-period.model';
import { FormYear } from '../models/form-year.model';
import { Salary } from '../models/salary.model';
import { TaxDate } from '../models/tax-date.model';
import { TaxMonth } from '../models/tax-month.model';
import { TaxYear } from '../models/tax-year.model';
import { TimePeriod } from '../models/time-period.enum';
import { SalaryService } from '../salary-service/salary.service';


@Component({
  selector: 'ad-salary-add-edit',
  templateUrl: './salary-add-edit.component.html',
  styleUrls: ['./salary-add-edit.component.css']
})

export class SalaryAddEditComponent implements OnInit {


  title: string = '';
  errorMessage: string;

  salaryForm: FormGroup;
  salary: Salary;
  private sub: Subscription;
  private subForm?: Subscription ;

  //Properties to keep selection for days
  private daySelected: string = '';
  private monthSelected: string = '';
  private yearSelected: string = ''; 

 //Data for form's dates and time period on form
  formPeriods: FormPeriod[] = FormPeriod.getPeriod();
  formYears: FormYear[] = FormYear.getYear();
  formMonths: FormMonth[] = FormMonth.getMonth();
  formDayDays: FormDay[] = FormDay.getDayDay();
  formDayMonths: FormDay[] = FormDay.getDayMonth();
  formDayYears: FormDay[] = FormDay.getDayYear();

  //Arrays to keep days options and leap year
  days: string[] = [];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];
  years: string[] = [];
  
  constructor (private fb: FormBuilder,
               private router: Router,
               private route: ActivatedRoute,
               private salaryService: SalaryService) { }

  ngOnInit(): void {

   this.createFrom();
   
   //Read the salary id from the route parameter
   this.sub = this.route.paramMap.subscribe(
     params => {
       const id = +params.get('id')!;
       this.getSalary(id);
     }
   );

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subForm?.unsubscribe();
  }

  //Create Salary Form
  createFrom(): void {

    this.salaryForm = this.fb.group({

      companyName: [this.salary?.companyName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      timePeriod: [this.salary?.timePeriod, [Validators.required]],  
      taxYear: [this.salary?.taxYear?.year],  
      taxMonth: [this.salary?.taxMonth?.month], 
      taxDayDay: [this.salary?.taxDate?.day], 
      taxDayMonth: [this.salary?.taxDate?.month], 
      taxDayYear: [this.salary?.taxDate?.year], 
      salaryAmount: [this.salary?.salaryAmount, [Validators.required, Validators.min(0.01), Validators.max(1000000)]], 
      currencyCode: [this.salary?.currencyCode, [Validators.required]],
    })

    //Set Validators for taxYear and remove Vaidators and values for other time periods
   this.subForm = this.salaryForm.get('timePeriod')?.valueChanges.subscribe(
      (result: string) => {
        if(result === 'PY'){
          this.salaryForm.get('taxYear')?.setValidators(Validators.required);
          this.salaryForm.get('taxMonth')?.clearValidators(); 
          this.salaryForm.get('taxDayDay')?.clearValidators();
          this.salaryForm.get('taxDayMonth')?.clearValidators();
          this.salaryForm.get('taxDayYear')?.clearValidators();
          this.salaryForm.get('taxMonth')?.setValue('');
          this.salaryForm.get('taxDayDay')?.setValue('');
          this.salaryForm.get('taxDayMonth')?.setValue('');
          this.salaryForm.get('taxDayYear')?.setValue('');
        }
        if(result === 'PM'){
          this.salaryForm.get('taxYear')?.clearValidators();
          this.salaryForm.get('taxMonth')?.setValidators(Validators.required); 
          this.salaryForm.get('taxDayDay')?.clearValidators();
          this.salaryForm.get('taxDayMonth')?.clearValidators();
          this.salaryForm.get('taxDayYear')?.clearValidators();
          this.salaryForm.get('taxYear')?.setValue('');
          this.salaryForm.get('taxDayDay')?.setValue('');
          this.salaryForm.get('taxDayMonth')?.setValue('');
          this.salaryForm.get('taxDayYear')?.setValue('');
        }
        if(result === 'PD'){
          this.salaryForm.get('taxYear')?.clearValidators()
          this.salaryForm.get('taxMonth')?.clearValidators(); 
          this.salaryForm.get('taxDayDay')?.setValidators(Validators.required);
          this.salaryForm.get('taxDayMonth')?.setValidators(Validators.required);
          this.salaryForm.get('taxDayYear')?.setValidators(Validators.required);
          this.salaryForm.get('taxYear')?.setValue('');
          this.salaryForm.get('taxMonth')?.setValue('');
        }

        this.salaryForm.get('taxYear')?.updateValueAndValidity();
        this.salaryForm.get('taxMonth')?.updateValueAndValidity();
        this.salaryForm.get('taxDayDay')?.updateValueAndValidity();
        this.salaryForm.get('taxDayMonth')?.updateValueAndValidity();
        this.salaryForm.get('taxDayYear')?.updateValueAndValidity();
      }      
    ); 
  }
  
  
 //Change days on months and leap year
  onMonthChange() {

    this.monthSelected = this.salaryForm.get('taxDayMonth')?.value;
    
    if(this.monthSelected === 'Jan' || 'Mar' || 'May' || 'Jul' || 'Aug' || 'Oct' || 'Dec'){
      let month31: FormDay[] = FormDay.getDayDay();
      this.formDayDays = [...month31];
      
    }
    
     if (this.monthSelected === 'Feb'){
      let month28: FormDay[] = FormDay.getDayDay();
      month28.splice(-3)
      this.formDayDays = [...month28];
    } 
     if (this.monthSelected === 'Apr' || 'Jun' || 'Sep' || 'Nov')
    {
      let month30: FormDay[] = FormDay.getDayDay();
      month30.splice(-1);
      this.formDayDays = [...month30];
    }


 }

  
  //Read id to get salary from service
  getSalary(id: number): void {
    this.salaryService.getSalary(id)
    .subscribe({
      next: (salary: Salary) => this.displaySalary(salary),
      error: err => this.errorMessage = err
    });
  }

  displaySalary(salary: Salary): void {
    if (this.salaryForm) {
      this.salaryForm.reset();
    }
    this.salary = salary;

    if (this.salary.id === 0) {
      this.title = 'Add Salary'
    } else {
      this.title = `Edit Product: ${this.salary.companyName}`
    }

    //Update data on the form
    this.createFrom();
    
  }

  //Create or update salary on save
  saveSalary(): void {
    if (this.salaryForm.valid) {
      if (this.salaryForm.dirty) {
        this.salary.id = this.salary.id;
        this.salary.userId = this.salary.userId;
        this.salary.companyName = this.salaryForm.get('companyName')?.value;
        this.salary.timePeriod = this.salaryForm.get('timePeriod')?.value;
        
        this.salary.taxYear = new TaxYear();
        this.salary.taxMonth = new TaxMonth();
        this.salary.taxDate = new TaxDate();
        
        if(this.salary.timePeriod === TimePeriod.PerTaxYear)
        {
          this.salary.taxYear.year = this.salaryForm.get('taxYear')?.value;
        }

        if(this.salary.timePeriod === TimePeriod.PerMonth){
          this.salary.taxMonth.month = this.salaryForm.get('taxMonth')?.value;
        }

        if(this.salary.timePeriod === TimePeriod.PerDay){
          this.salary.taxDate.day = this.salaryForm.get('taxDayDay')?.value;
          this.salary.taxDate.month = this.salaryForm.get('taxDayMonth')?.value;
          this.salary.taxDate.year = this.salaryForm.get('taxDayYear')?.value;
        }

        this.salary.salaryAmount = this.salaryForm.get('salaryAmount')?.value;
        this.salary.currencyCode = this.salaryForm.get('currencyCode')?.value;

        console.log(this.salary);

        if (this.salary.id === 0) {
          this.salaryService.createSalary(this.salary)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: (err: string) => this.errorMessage = err
            });
        } else {
          this.salaryService.updateSalary(this.salary)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    } 
  }




  // Reset the form to clear the flags
  onSaveComplete(): void {
    this.salaryForm.reset();
    this.router.navigate(['/salary-list']);
  }
 

 
}
