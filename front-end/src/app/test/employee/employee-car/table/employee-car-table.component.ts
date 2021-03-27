import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toast } from 'src/app/base/alert/toast-sweet-alert';
import Swal from 'sweetalert2';
import { EmployeeCar } from '../../../models';
import { EmployeeCarService } from '../../../services';

@Component({
  selector: 'app-employee-car-table',
  templateUrl: 'employee-car-table.component.html',
})
export class EmployeeCarTableComponent implements OnInit {

  data: EmployeeCar[] = [];
  employeeId: number = 0;
  employeeFormEditable: boolean = false;

  constructor(
    private employeeCarService: EmployeeCarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.employeeFormEditable = Boolean(this.activatedRoute.snapshot.data.editable);
    
    if (this.employeeId) {
      this.getAll(this.employeeId);
    }
  }

  getAll(id: number) {
    this.employeeCarService.getAll(id).subscribe((data) => (this.data = data));
  }

  onDelete(id: number) {
    Swal.fire({
      title: 'Do you want to delete data?',
      showCancelButton: true,
      icon: 'error'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeCarService.delete(id).subscribe(data => {
          this.getAll(this.employeeId);
          toast(true, data.message);
        })
      }
    });
  }
}
