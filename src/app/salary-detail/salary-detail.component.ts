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

  title: string = "Salary Detais for"
  
  @Input() salary: Salary ;  

  @Output() deleteSalary: EventEmitter<any> = new EventEmitter;

  onClickDelete(salary: Salary) {
    
    this.deleteSalary.emit(salary);
  
  }
  
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
