import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';
import { TimePeriodPipe } from './pipes/time-period.pipe';
import { SalaryAddEditComponent } from './salary-add-edit/salary-add-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SalaryData } from './salary-data/salary-data';

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
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(SalaryData),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
