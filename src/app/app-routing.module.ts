import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { SalaryAddEditComponent } from './salary-add-edit/salary-add-edit.component';
import { SalaryAddEditGuard } from './salary-add-edit/salary-add-edit.guard';
import { SalaryListComponent } from './salary-list/salary-list.component';

const routes: Routes = [
  { path: 'salary-list', component: SalaryListComponent },
 
  { 
    path: 'salary-add-edit/:id/edit',
    canDeactivate: [SalaryAddEditGuard], 
    component: SalaryAddEditComponent
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
