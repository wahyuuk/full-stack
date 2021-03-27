import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './comapny-routing.module';
import { CompanyFormComponent } from './form/company-form.component';
import { CompanyTableComponent } from './table/company-table.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompanyTableComponent, CompanyFormComponent]
})
export class CompanyModule { }
