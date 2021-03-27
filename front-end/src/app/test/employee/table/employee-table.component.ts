import { Component, OnInit } from '@angular/core';
import { toast } from 'src/app/base/alert/toast-sweet-alert';
import Swal from 'sweetalert2';
import { Employee } from '../../models';
import { EmployeeService } from '../../services';

@Component({
  templateUrl: 'employee-table.component.html',
})
export class EmployeeTableComponent implements OnInit {

  data: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.employeeService.getAll().subscribe(data => this.data = data);
  }

  onDelete(id: number) {
    Swal.fire({
      title: 'Do you want to delete data?',
      showCancelButton: true,
      icon: 'error'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.delete(id).subscribe(data => {
          this.getAll();
          toast(true, data.message);
        })
      }
    });
  }
}
