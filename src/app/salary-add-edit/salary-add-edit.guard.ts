import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { SalaryAddEditComponent } from './salary-add-edit.component';

@Injectable({
  providedIn: 'root'
})
export class SalaryAddEditGuard implements CanDeactivate<SalaryAddEditComponent> {
  canDeactivate(component: SalaryAddEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if(component.salaryForm.dirty) {
      const companyName = component.salaryForm.get('companyName')?.value || 'New Salary';
      return confirm(`Navigate away and lose all changes to ${companyName}?`)
    }
    return true;
  }
  
}
