import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormDay } from '../models/form-day.model';
import { FormMonth } from '../models/form-month.model';
import { FormPeriod } from '../models/form-period.model';
import { FormYear } from '../models/form-year.model';
import { Salary } from '../models/salary.model';
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


 //Data for form's dates and time period on form
  formPeriods: FormPeriod[] = FormPeriod.getPeriod();
  formYears: FormYear[] = FormYear.getYear();
  formMonths: FormMonth[] = FormMonth.getMonth();
  formDayDays: FormDay[] = FormDay.getDayDay();
  formDayMonths: FormDay[] = FormDay.getDayMonth();
  formDayYears: FormDay[] = FormDay.getDayYear();
  
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
    this.salaryForm.get('timePeriod')?.valueChanges.subscribe(
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
        this.salaryForm.get('taxYear')?.updateValueAndValidity();
      }      
    );

    //Set Validators for taxMonth and remove Vaidators and values for other time periods
    this.salaryForm.get('timePeriod')?.valueChanges.subscribe(
      (result: string) => {
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
        this.salaryForm.get('taxMonth')?.updateValueAndValidity();
      }      
    );

    //Set Validators for taxDay and remove Vaidators and values for other time periods
    this.salaryForm.get('timePeriod')?.valueChanges.subscribe(
      (result: string) => {
        if(result === 'PD'){
          this.salaryForm.get('taxYear')?.clearValidators()
          this.salaryForm.get('taxMonth')?.clearValidators(); 
          this.salaryForm.get('taxDayDay')?.setValidators(Validators.required);
          this.salaryForm.get('taxDayMonth')?.setValidators(Validators.required);
          this.salaryForm.get('taxDayYear')?.setValidators(Validators.required);
          this.salaryForm.get('taxYear')?.setValue('');
          this.salaryForm.get('taxMonth')?.setValue('');
        }
        this.salaryForm.get('taxDayDay')?.updateValueAndValidity();
        this.salaryForm.get('taxDayMonth')?.updateValueAndValidity();
        this.salaryForm.get('taxDayYear')?.updateValueAndValidity();
      }      
    );

    this.salaryForm.get('timePeriod')?.valueChanges.subscribe(
      (result: string) => {
        if(result === 'PD'){
          this.salaryForm.get('taxYear')?.clearValidators()
          this.salaryForm.get('taxMonth')?.clearValidators(); 
          this.salaryForm.get('taxDayDay')?.setValidators(Validators.required);
          this.salaryForm.get('taxDayMonth')?.setValidators(Validators.required);
          this.salaryForm.get('taxDayYear')?.setValidators(Validators.required);
          this.salaryForm.get('taxYear')?.setValue('');
          this.salaryForm.get('taxMonth')?.setValue('');
        }
        this.salaryForm.get('taxDayDay')?.updateValueAndValidity();
        this.salaryForm.get('taxDayMonth')?.updateValueAndValidity();
        this.salaryForm.get('taxDayYear')?.updateValueAndValidity();
      }      
    );
      
   /**EK het probeer hier om met die arrays the werk wat die drop down lists populate
     maar niks wou werk nie wil net eers seker maak of 'n mens wel valueChanges so kan gebruik
    */
    //Print correct tax days based on tax dayMonth selection
    this.salaryForm.get('timePeriod')?.valueChanges.subscribe(
      (result: string) => {
        if(result === 'Jan' || 'Mar' || 'May' || 'Jul' || 'Aug' || 'Oct' || 'Dec'){
         
        //Work with formDayDays array that prints days
        }
        else if(result === 'Apr' || 'Jun' || 'Sep' || 'Nov'){


        }
        else {
            //splice array to only print 28 days for February
        }
      }      
    ); 
    
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
        const p = {...this.salary, ...this.salaryForm.value };

        if (p.id === 0) {
          this.salaryService.createSalary(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: (err: string) => this.errorMessage = err
            });
        } else {
          this.salaryService.updateSalary(p)
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
