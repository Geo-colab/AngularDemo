import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';
import { TimePeriodPipe } from './pipes/time-period.pipe';
import { SalaryAddEditComponent } from './salary-add-edit/salary-add-edit.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SalaryListComponent,
    WelcomeComponent,
    SalaryDetailComponent,
    TimePeriodPipe,
    SalaryAddEditComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
