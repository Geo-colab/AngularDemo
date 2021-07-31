
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Salary } from '../models/salary.model';



@Component({
  selector: 'ad-salary-detail',
  templateUrl: './salary-detail.component.html',
  styleUrls: ['./salary-detail.component.css']
  
})
export class SalaryDetailComponent implements OnInit {

  title: string = "Salary Detais for";
  errorMessage: string = '';
  

  @Input() salary: Salary ;  

  @Output() delSalary: EventEmitter<any> = new EventEmitter;

  onClickDelete(salary: Salary) {
    
    this.delSalary.emit(salary);
  
  }
  
  constructor() { }

  
  
  

  ngOnInit(): void {
      
    
  }

 

}
