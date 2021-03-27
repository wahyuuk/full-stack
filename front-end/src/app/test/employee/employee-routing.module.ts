import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCarFormComponent } from './employee-car/form/employee-car-form.component';
import { EmployeeFormComponent } from './form/employee-form.component';
import { EmployeeTableComponent } from './table/employee-table.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeTableComponent,
    data: {
      title: 'Employee Table'
    }
  },
  {
    path: 'add',
    component: EmployeeFormComponent,
    data: {
      title: 'Add',
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
        component: EmployeeFormComponent,
        data: {
          title: 'Detail',
          editable: false
        }
      },
      {
        path: 'edit',
        data: {
          title: 'Edit',
          editable: true
        },
        children: [
          {
            path: '',
            component: EmployeeFormComponent
          },
          {
            path: 'employee-car',
            children: [
              {
                path: 'add',
                component: EmployeeCarFormComponent,
                data: {
                  editable: true
                }
              },
              {
                path: ':carId',
                data: {
                  title: 'Employee Car'
                },
                children: [
                  {
                    path: '',
                    component: EmployeeCarFormComponent,
                    data: {
                      editable: false
                    }
                  },
                  {
                    path: 'edit',
                    component: EmployeeCarFormComponent,
                    data: {
                      editable: true
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}