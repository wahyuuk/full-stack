import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './form/car-form.component';
import { CarTableComponent } from './table/car-table.component';

export const routes: Routes = [
  {
    path: '',
    component: CarTableComponent,
    data: {
      title: 'Car Table'
    }
  },
  {
    path: 'add',
    component: CarFormComponent,
    data: {
      title: 'Add Car',
      editable: true
    }
  },
  {
    path: ':id',
    data: {
      title: 'Form'
    },
    children: [
      {
        path: '',
        component: CarFormComponent,
        data: {
          title: 'Detail',
          editable: false
        }
      },
      {
        path: 'edit',
        component: CarFormComponent,
        data: {
          title: 'Edit',
          editable: true
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {}