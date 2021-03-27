import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toast } from 'src/app/base/alert/toast-sweet-alert';
import { CarService } from '../../services';

@Component({
  templateUrl: 'car-form.component.html',
})
export class CarFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  id: number = 0;
  editable: boolean = false;

  constructor(
    private carService: CarService,
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
      this.carService.get(this.id).subscribe((data) => {
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
      this.carService.create(this.form.value).subscribe(data => {
        toast(true, data.message);
        this.location.back();
      });
    } else {
      this.carService.edit(this.id, this.form.value).subscribe(data => {
        toast(true, data.message);
        this.location.back();
      });
    }
  }

  onBack() {
    this.location.back();
  }
}
