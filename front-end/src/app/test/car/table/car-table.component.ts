import { Component, OnInit } from '@angular/core';
import { toast } from 'src/app/base/alert/toast-sweet-alert';
import Swal from 'sweetalert2';
import { Car } from '../../models';
import { CarService } from '../../services';

@Component({
  templateUrl: 'car-table.component.html',
})
export class CarTableComponent implements OnInit {
  
  data: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.carService.getAll().subscribe((data) => (this.data = data));
  }

  onDelete(id: number) {
    Swal.fire({
      title: 'Do you want to delete data?',
      showCancelButton: true,
      icon: 'error'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carService.delete(id).subscribe(data => {
          this.getAll();
          toast(true, data.message);
        })
      }
    });
  }
}
