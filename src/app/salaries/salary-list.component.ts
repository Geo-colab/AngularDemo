import { Component, OnInit } from '@angular/core';
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
  
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.salaries)
  }

}
