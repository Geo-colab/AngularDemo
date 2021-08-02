import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Salary } from '../models/salary.model';
import { TaxDate } from '../models/tax-date.model';
import { TaxYear } from '../models/tax-year.model';
import { TaxMonth } from '../models/tax-month.model';



@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private salariesUrl: string = 'api/salaries'

  constructor(private http: HttpClient) { }

  getSalary(id: number): Observable<Salary> {
    if (id === 0) {
      return of(this.initializeSalary());
    }
    const url = `${this.salariesUrl}/${id}`;
    return this.http.get<Salary>(url)
      .pipe(
        tap(data => console.log('getSalary: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private initializeSalary(): Salary {
   
    let initialize = new Salary();
    initialize.id = 0;
    initialize.userId = 2;
    initialize.companyName = '';
    initialize.taxDate = new TaxDate();
    initialize.taxMonth = new TaxMonth();
    initialize.taxYear = new TaxYear();
    initialize.salaryAmount = null;
    initialize.currencyCode = '';
  
    return initialize;
       
  }

  updateSalary(salary: Salary): Observable<Salary> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.salariesUrl}/${salary.id}`;
    return this.http.put<Salary>(url, salary, { headers })
      .pipe(
        tap(() => console.log('updateSalary: ' + salary.id)),
        // Return the product on an update 
        catchError(this.handleError)
      );
  }

  createSalary(salary: Salary): Observable<Salary> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    salary.id = null;
    return this.http.post<Salary>(this.salariesUrl, salary, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(this.salariesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteSalary(id: number | null): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.salariesUrl}/${id}`;
    return this.http.delete<Salary>(url, { headers })
      .pipe(
        tap(data => console.log('deleteSalary: ' + id)),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
