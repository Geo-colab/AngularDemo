import { Component, Input, OnInit } from '@angular/core';
import { Salary } from '../models/salary.model';

@Component({
  selector: 'ad-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css'],
  styles: ['thead {color: #337AB7;}']
})
export class SalaryListComponent implements OnInit {
  
  title: string = "Salary List";

  salaries: Salary [] = Salary.getTestData(2);

  showDetails: boolean = false; // Hide Details Component

  salaryDetails: Salary;

  displayDetails(): boolean {
  
    return this.showDetails = true; // Display Details Component
    
  }
  
  displaySalary (salary: Salary): void {
    
    this.salaryDetails = salary;
  }
  
 
  onDeleteSalary(salary: Salary) {
    
    let index = this.salaries.indexOf(salary);
    if (index > -1) {
    this.salaries.splice(index, 1);
    
    this.showDetails = false; //Hide salary details on deletion. 
   }

 }

  constructor() { }

  ngOnInit(): void {
     

  }

}
