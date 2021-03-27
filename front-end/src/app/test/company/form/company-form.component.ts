import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toast } from 'src/app/base/alert/toast-sweet-alert';
import { CompanyService } from '../../services';

@Component({
  templateUrl: 'company-form.component.html'
})
export class CompanyFormComponent implements OnInit {
  
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });

  id: number = 0;
  editable: boolean = false;

  constructor(
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
      this.companyService.get(this.id).subscribe((data) => {
        this.form.patchValue(data);
      });
    }
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    if (!this.id) {
      this.companyService.create(this.form.value).subscribe(data => {
        toast(true, data.message);
        this.location.back();
      });
    } else {
      this.companyService.edit(this.id, this.form.value).subscribe(data => {
        toast(true, data.message);
        this.location.back();
      });
    }
  }

  onBack() {
    this.location.back();
  }
}