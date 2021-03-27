import { Component, OnInit } from '@angular/core';
import { toast } from 'src/app/base/alert/toast-sweet-alert';
import Swal from 'sweetalert2';
import { Company } from '../../models';
import { CompanyService } from '../../services';

@Component({
  templateUrl: 'company-table.component.html'
})
export class CompanyTableComponent implements OnInit {

  data: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() { 
    this.getAll();
  }

  getAll() {
    this.companyService.getAll().subscribe(data => this.data = data);
  }

  onDelete(id: number) {
    Swal.fire({
      title: 'Do you want to delete data?',
      showCancelButton: true,
      icon: 'error'
    }).then((result) => {
      if (result.isConfirmed) {
        this.companyService.delete(id).subscribe(data => {
          this.getAll();
          toast(true, data.message);
        })
      }
    });
  }
}