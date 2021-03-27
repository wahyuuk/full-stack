import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toast } from 'src/app/base/alert/toast-sweet-alert';
import { Company } from '../../models';
import { CompanyService, EmployeeService } from '../../services';

@Component({
  templateUrl: 'employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dateOfBirth: new FormControl(new Date(), Validators.required),
    placeOfBirth: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
  });

  id: number = 0;
  editable: boolean = false;
  company: Company[] = [];

  constructor(
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.editable = Boolean(this.activatedRoute.snapshot.data.editable);

    if (!this.editable) {
      this.form.disable();
    }

    if (this.id) {
      this.employeeService.get(this.id).subscribe(data => {
        this.form.patchValue(data);
        this.form.get('dateOfBirth')?.setValue(new Date(data.dateOfBirth));
      });
    }
  }

  getCompany() {
    this.companyService.getAll().subscribe(data => this.company = data);
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    if (!this.id) {
      this.employeeService.create(this.form.value).subscribe(data => {
        toast(true, data.message);
        this.location.back();
      });
    } else {
      this.employeeService.edit(this.id, this.form.value).subscribe(data => {
        toast(true, data.message);
        this.location.back();
      });
    }
  }

  onBack() {
    this.location.back();
  }
}