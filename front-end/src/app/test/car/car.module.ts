import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CarRoutingModule } from './car-routing.module';
import { CarFormComponent } from './form/car-form.component';
import { CarTableComponent } from './table/car-table.component';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarTableComponent, CarFormComponent]
})
export class CarModule { }
