import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './form/company-form.component';
import { CompanyTableComponent } from './table/company-table.component';

export const routes: Routes = [
  {
    path: '',
    component: CompanyTableComponent,
    data: {
      title: 'Company Table'
    }
  },
  {
    path: 'add',
    component: CompanyFormComponent,
    data: {
      title: 'Add Form',
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
        component: CompanyFormComponent,
        data: {
          title: 'Detail',
          editable: false
        }
      },
      {
        path: 'edit',
        component: CompanyFormComponent,
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
export class CompanyRoutingModule {}