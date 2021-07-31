import { Component, Input, OnInit } from '@angular/core';
import { Salary } from '../models/salary.model';
import { SalaryService } from '../salary-service/salary.service';

@Component({
  selector: 'ad-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css'],
  styles: ['thead {color: #337AB7;}']
})
export class SalaryListComponent implements OnInit {
  
  title: string = "Salary List";
  errorMessage = '';
  dayFilter: string = 'Day'
  monthFilter: string = ''
 

  showDetails: boolean = false; // Hide Details Component

  salary: Salary;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredSalaries = this.performFilter(value);
  }
 
  salaries: Salary[] = [];
  filteredSalaries: Salary[] = [];
  

  constructor(private salaryService: SalaryService) { }

  //Get and set list fiters
  performFilter(filterBy: string): Salary[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.salaries.filter((salary: Salary) =>
               salary.companyName.toLocaleLowerCase().includes(filterBy));
  }

  //Methods to perform filtering of per day, month, and year
  filterDay() {
  
    this.filteredSalaries = this.performFilterPeriod('PD');
  }
  
  filterMonth() {
  
    this.filteredSalaries = this.performFilterPeriod('PM');
  }

  filterYear() {
  
    this.filteredSalaries = this.performFilterPeriod('PY');
  }

  performFilterPeriod(filterBy: string): Salary[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.salaries.filter((salary: Salary) =>
               salary.timePeriod.toLocaleLowerCase().includes(filterBy));
  }

  
  displayDetails(): boolean {
  
    return this.showDetails = true; // Display Details Component
    
  }
  
  displaySalary (salary: Salary): void {
    
    this.salary = salary;
  }
  
  //Retrieve Salaries from service
  getSalaries(): void {
    this.salaryService.getSalaries().subscribe({
      next: salaries => {
        this.salaries = salaries; 
        this.filteredSalaries = [...this.salaries];              
      },
      error: err => this.errorMessage = err
    });
  }
 
  //Delete Salary from service
  deleteSalary(salary: Salary) {
    
      if (confirm(`Really delete salary for: ${this.salary.companyName}?`)) {
        this.salaryService.deleteSalary(this.salary.id)
          .subscribe({
            next: () => this.onDeleteComplete(),
            error: err => this.errorMessage = err
          });
      }
    }
   
  ngOnInit(): void {
    this.listFilter = '';
    this.getSalaries();
  }
  
  //Reload salaries once deletion is complete
  onDeleteComplete() {
  
    this.getSalaries();
    this.showDetails = false;
       
  }

}
