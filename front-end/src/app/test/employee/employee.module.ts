import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormComponent } from './form/employee-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeeTableComponent } from './table/employee-table.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EmployeeCarFormComponent } from './employee-car/form/employee-car-form.component';
import { EmployeeCarTableComponent } from './employee-car/table/employee-car-table.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule
  ],
  declarations: [
    EmployeeTableComponent, 
    EmployeeFormComponent,
    EmployeeCarTableComponent,
    EmployeeCarFormComponent
  ]
})
export class EmployeeModule { }
