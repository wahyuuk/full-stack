import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Test'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'employee',
        loadChildren: ()=> import('./employee/employee.module').then(mod => mod.EmployeeModule)
      },
      {
        path: 'company',
        loadChildren: ()=> import('./company/company.module').then(mod => mod.CompanyModule)
      },
      {
        path: 'car',
        loadChildren: ()=> import('./car/car.module').then(mod => mod.CarModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}