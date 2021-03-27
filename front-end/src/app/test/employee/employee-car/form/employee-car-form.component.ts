import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toast } from 'src/app/base/alert/toast-sweet-alert';
import { Car } from '../../../models';
import { CarService, EmployeeCarService } from '../../../services';

@Component({
  templateUrl: 'employee-car-form.component.html'
})
export class EmployeeCarFormComponent implements OnInit {

  form = new FormGroup({
    car: new FormControl('', Validators.required),
  });

  employeeId: number = 0;
  employeeCarId: number = 0;
  editable: boolean = false;
  car: Car[] = [];

  constructor(
    private employeeCarSercvice: EmployeeCarService,
    private carService: CarService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.employeeCarId = Number(this.activatedRoute.snapshot.paramMap.get('carId'));
    this.editable = Boolean(this.activatedRoute.snapshot.data.editable);

    if (!this.editable) {
      this.form.disable();
    }

    if (this.employeeCarId) {
      this.employeeCarSercvice.get(this.employeeCarId).subscribe(data => {
        console.log(data.car)
        this.form.patchValue(data);
      });
    }
  }

  getEmployeeCar() {
    this.carService.getAll().subscribe(data => this.car = data);
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    if (!this.employeeCarId) {
      this.employeeCarSercvice.create(this.form.value, this.employeeId).subscribe(data => {
        toast(true, data.message);
        this.location.back();
      });
    } else {
      this.employeeCarSercvice.edit(this.employeeCarId, this.form.value).subscribe(data => {
        toast(true, data.message);
        this.location.back();
      });
    }
  }

  onBack() {
    this.location.back();
  }
}